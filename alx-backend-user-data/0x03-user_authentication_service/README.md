0x03. User authentication service
=================================

Back-end Authentification

-   By: Emmanuel Turlay, Staff Software Engineer at Cruise
-   Weight: 1

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/4cb3c8c607afc1d1582d.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220803T200036Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5ecda8bdc29819caecfe59db30e793dc81fa7a9f2f74786cb954ec85bcc678d9)

In the industry, you should **not** implement your own authentication system and use a module or framework that doing it for you (like in Python-Flask: [Flask-User](https://alx-intranet.hbtn.io/rltoken/9nVfotMI_1zpEzihMzBeTA "Flask-User")). Here, for the learning purpose, we will walk through each step of this mechanism to understand it by doing.

Resources
---------

**Read or watch:**

-   [Flask documentation](https://alx-intranet.hbtn.io/rltoken/lKExyvivrrW4eh0eI8UV6A "Flask documentation")
-   [Requests module](https://alx-intranet.hbtn.io/rltoken/py7LuuD1u2MUwcaf8wnDzQ "Requests module")
-   [HTTP status codes](https://alx-intranet.hbtn.io/rltoken/cj-mc5ZHp_KyXn1yikHC0A "HTTP status codes")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/oAqmZmipBdjCcfI5QqyFXA "explain to anyone"), **without the help of Google**:

-   How to declare API routes in a Flask app
-   How to get and set cookies
-   How to retrieve request form data
-   How to return various HTTP status codes

Requirements
------------

-   Allowed editors: `vi`, `vim`, `emacs`
-   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `python3` (version 3.7)
-   All your files should end with a new line
-   The first line of all your files should be exactly `#!/usr/bin/env python3`
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `pycodestyle` style (version 2.5)
-   You should use `SQLAlchemy` 1.3.x
-   All your files must be executable
-   The length of your files will be tested using `wc`
-   All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
-   All your classes should have a documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)'`)
-   All your functions (inside and outside a class) should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)
-   A documentation is not a simple word, it's a real sentence explaining what's the purpose of the module, class or method (the length of it will be verified)
-   All your functions should be type annotated
-   The flask app should only interact with `Auth` and never with `DB` directly.
-   Only public methods of `Auth` and `DB` should be used outside these classes

Setup
-----

You will need to install `bcrypt`

```
pip3 install bcrypt

```

Tasks
-----

### 0\. User model

mandatory

In this task you will create a SQLAlchemy model named `User` for a database table named `users` (by using the [mapping declaration](https://alx-intranet.hbtn.io/rltoken/-a69l-rGqoFdXnnu6qfKdA "mapping declaration") of SQLAlchemy).

The model will have the following attributes:

-   `id`, the integer primary key
-   `email`, a non-nullable string
-   `hashed_password`, a non-nullable string
-   `session_id`, a nullable string
-   `reset_token`, a nullable string

```
bob@dylan:~$ cat main.py
#!/usr/bin/env python3
"""
Main file
"""
from user import User

print(User.__tablename__)

for column in User.__table__.columns:
    print("{}: {}".format(column, column.type))

bob@dylan:~$ python3 main.py
users
users.id: INTEGER
users.email: VARCHAR(250)
users.hashed_password: VARCHAR(250)
users.session_id: VARCHAR(250)
users.reset_token: VARCHAR(250)
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-user-data`
-   Directory: `0x03-user_authentication_service`
-   File: `user.py`

 Done? Help Check your code Get a sandbox

### 1\. create user

mandatory

In this task, you will complete the `DB` class provided below to implement the `add_user` method.

```
"""DB module
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.session import Session

from user import Base

class DB:
    """DB class
    """

    def __init__(self) -> None:
        """Initialize a new DB instance
        """
        self._engine = create_engine("sqlite:///a.db", echo=True)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self) -> Session:
        """Memoized session object
        """
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

```

Note that `DB._session` is a private property and hence should NEVER be used from outside the `DB` class.

Implement the `add_user` method, which has two required string arguments: `email` and `hashed_password`, and returns a `User` object. The method should save the user to the database. No validations are required at this stage.

```
bob@dylan:~$ cat main.py
#!/usr/bin/env python3
"""
Main file
"""

from db import DB
from user import User

my_db = DB()

user_1 = my_db.add_user("test@test.com", "SuperHashedPwd")
print(user_1.id)

user_2 = my_db.add_user("test1@test.com", "SuperHashedPwd1")
print(user_2.id)

bob@dylan:~$ python3 main.py
1
2
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-user-data`
-   Directory: `0x03-user_authentication_service`
-   File: `db.py`

 Done? Help Check your code Get a sandbox

### 2\. Find user

mandatory

In this task you will implement the `DB.find_user_by` method. This method takes in arbitrary keyword arguments and returns the first row found in the `users` table as filtered by the method's input arguments. No validation of input arguments required at this point.

Make sure that SQLAlchemy's `NoResultFound` and `InvalidRequestError` are raised when no results are found, or when wrong query arguments are passed, respectively.

**Warning:**

-   `NoResultFound` has been moved from `sqlalchemy.orm.exc` to `sqlalchemy.exc` between the version 1.3.x and 1.4.x of SQLAchemy - please make sure you are importing it from `sqlalchemy.orm.exc`

```
bob@dylan:~$ cat main.py
#!/usr/bin/env python3
"""
Main file
"""
from db import DB
from user import User

from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.orm.exc import NoResultFound

my_db = DB()

user = my_db.add_user("test@test.com", "PwdHashed")
print(user.id)

find_user = my_db.find_user_by(email="test@test.com")
print(find_user.id)

try:
    find_user = my_db.find_user_by(email="test2@test.com")
    print(find_user.id)
except NoResultFound:
    print("Not found")

try:
    find_user = my_db.find_user_by(no_email="test@test.com")
    print(find_user.id)
except InvalidRequestError:
    print("Invalid")

bob@dylan:~$ python3 main.py
1
1
Not found
Invalid
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-user-data`
-   Directory: `0x03-user_authentication_service`
-   File: `db.py`

 Done? Help Check your code Get a sandbox

### 3\. update user

mandatory

In this task, you will implement the `DB.update_user` method that takes as argument a required `user_id` integer and arbitrary keyword arguments, and returns `None`.

The method will use `find_user_by` to locate the user to update, then will update the user's attributes as passed in the method's arguments then commit changes to the database.

If an argument that does not correspond to a user attribute is passed, raise a `ValueError`.

```
bob@dylan:~$ cat main.py
#!/usr/bin/env python3
"""
Main file
"""
from db import DB
from user import User

from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.orm.exc import NoResultFound

my_db = DB()

email = 'test@test.com'


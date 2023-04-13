#!/usr/bin/python3
"""
deletes all State objects with a name
containing the letter a from the database hbtn_0e_6_usa
"""

import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import State

if __name__ == "__main__":
    engine = create_engine("mysql+mysqldb://{}:{}@localhost/{}".format(
        sys.argv[1], sys.argv[2], sys.argv[3]), pool_pre_ping=True)
    session_maker = sessionmaker(bind=engine)
    session = session_maker()

    states = session.query(State).filter(State.name.like('%a%')).all()
    for state in states:
        session.delete(state)

    session.commit()

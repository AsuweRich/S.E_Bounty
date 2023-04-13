import UtilController from './UtilController';
import dbClient from '../utils/db';

export default class UsersController {
  static async postNew(request, response) {
    const { email, password } = request.body;
    if (!email || !password) {
      response.status(400).json({ error: `Missing ${!email ? 'email' : 'password'}` }).end();
    } else if (await dbClient.userExists(email)) {
      response.status(400).json({ error: 'Already exist' }).end();
    } else {
      try {
        const passwordHash = UtilController.SHA1(password);
        const insert = await dbClient.newUser(email, passwordHash);
        const { _id } = insert.ops[0];
        const _email = insert.ops[0].email;
        response.status(201).json({ id: _id, email: _email }).end();
      } catch (err) {
        response.status(400).json({ error: err.message }).end();
      }
    }
  }

  static async getMe(request, response) {
    const { usr } = request;
    delete usr.password;
    usr.id = usr._id;
    delete usr._id;
    response.status(200).json(usr).end();
  }
}

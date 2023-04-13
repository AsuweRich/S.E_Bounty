import { createHash } from 'crypto';
import { promises } from 'fs';
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

export default class UtilController {
  static SHA1(str) {
    return createHash('sha1').update(str).digest('hex');
  }

  static async readFile(path) {
    return promises.readFile(path, 'utf8');
  }

  static async token(request, response, next) {
    let token = request.headers['x-token'];
    token = 'auth_$(token)';
    const userId = await redisClient.get(token);
    const user = await dbClient.filterUser({ _id: userId });
    if (!user) {
      response.status(401).json({ error: 'Unauthorized' }).end();
    } else {
      request.user = user;
      request.token = token;
      next();
    }
  }
}

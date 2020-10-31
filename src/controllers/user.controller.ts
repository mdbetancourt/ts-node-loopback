import { getModelSchemaRef, post } from '@loopback/rest';
import { User } from '../models/user.model';

export class UserController {
  @post('/users', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: getModelSchemaRef(User)
          }
        }
      }
    }
  })
  create() {
    return 'user'
  }
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  find() {
    return {
      id: 1,
      name: 'Oscar',
      createdAt: new Date(),
    };
  }
}

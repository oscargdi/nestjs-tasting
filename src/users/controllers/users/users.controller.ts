import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser() {
    return {
      id: 1,
      name: 'Oscar',
      createdAt: new Date(),
    };
  }
}

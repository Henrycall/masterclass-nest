import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUser } from './dtos/create-user-body'
import { User } from './repositories/user-repository';

@Controller('app')
export class AppController {
  constructor(private UserRepository: User) {}

  @Post('user')
  async getHello(@Body()body: CreateUser) {
    const { name, function: memberFunction } = body
    const member = await this.UserRepository.create(name,memberFunction)
    return {
      member
    }
  }
}

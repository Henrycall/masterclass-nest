import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateUser } from './dtos/create-user-body'

@Controller()
export class AppController {
  constructor(private prisma : PrismaService) {}

  @Post('user')
  async getHello(@Body()body: CreateUser) {
    const { name, function: memberFunction } = body
    const member = await this.prisma.user.create({
      data: {
        id :  uuidv4(),
        name,
        function: memberFunction
      },
    })
    return {
      member
    }
  }
}

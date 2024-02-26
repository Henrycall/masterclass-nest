import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { userInfo } from 'os';

@Controller()
export class AppController {
  constructor(private prisma : PrismaService) {}

  @Get('user')
  async getHello(@Body()body: any) {
    const { name , 'function' : memberFunction } = body
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

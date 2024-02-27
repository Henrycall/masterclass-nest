import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { User } from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: User,
      useClass: PrismaUserRepository
    }
  ],
})
export class AppModule {}

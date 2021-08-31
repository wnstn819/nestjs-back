import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cat/cats.controller';
import { CatsService } from './cat/cats.service';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  //데코레이터
  imports: [],
  controllers: [AppController, CatsController, UserController],
  providers: [AppService, CatsService, UserService, PrismaService],
})
export class AppModule {}

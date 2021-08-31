import {
  Controller,
  Post,
  Put,
  Body,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(
    @Body()
    userData: {
      name?: string;
      email: string;
      age: number;
      phone: string;
      detail: string;
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get()
  async get(@Param('id') id): Promise<UserModel[]> {
    return await this.userService.getAll();
  }

  @Get('name/:searchString')
  async getName(
    @Param('searchString') searchString: string,
  ): Promise<UserModel[]> {
    return await this.userService.getSearch({
      where: { name: { contains: searchString } },
    });
  }

  @Get('email/:searchString')
  async getEmail(
    @Param('searchString') searchString: string,
  ): Promise<UserModel[]> {
    return await this.userService.getSearch({
      where: { email: { contains: searchString } },
    });
  }

  @Get('phone/:searchString')
  async getPhone(
    @Param('searchString') searchString: string,
  ): Promise<UserModel[]> {
    return await this.userService.getSearch({
      where: { phone: { contains: searchString } },
    });
  }

  @Put('/:id')
  updateUser(@Param('id') id, @Body() updateData: Prisma.UserUpdateInput) {
    return this.userService.updateUser({
      data: updateData,
      where: { id: Number(id) },
    });
  }

  @Delete('/:id')
  delete(@Param('id') id) {
    return this.userService.deleteUser({ id: Number(id) });
  }
}

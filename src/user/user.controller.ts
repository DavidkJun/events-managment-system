import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import {UserService} from './user.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { User } from '../typeorm/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers()
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto)

  }
  @Delete()
  leaveGroup() {

  }
}


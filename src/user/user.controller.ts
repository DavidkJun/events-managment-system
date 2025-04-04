import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import {UserService} from './user.service';
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto)

  }
  @Delete()
  leaveGroup() {

  }
}


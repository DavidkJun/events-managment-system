import { Controller, Get, Post } from '@nestjs/common';

@Controller('groups')
export class GroupsController {
  @Get()
  getGroups() {

  }
}

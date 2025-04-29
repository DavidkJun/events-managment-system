import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import {GroupsService} from './groups.service';
import {Response} from 'express';
import {join} from 'path';
import { CreateGroupDto } from '../dtos/createGroup.dto';
import { Group } from '../typeorm/Group';
import { Render } from '@nestjs/common/decorators';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {
  }

  @Get()
  getGroups(): Promise<Group[]> {
    return this.groupsService.getGroups()
  }

  @Get('page')
  @Render("groupsPage")
  getGroupsPage() {
    return {mesage: "hello"}
  }

  @Post()
  createGroup(@Body() createGroupDto: CreateGroupDto) {
    this.groupsService.createGroup(createGroupDto);
  }
}

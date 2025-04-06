import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import {GroupsService} from './groups.service';
import {Response} from 'express';
import {join} from 'path';
import { CreateGroupDto } from '../dtos/createGroup.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {
  }

  @Get()
  getGroups(@Res() res: Response): void {
   const filePath = join(__dirname, '..', '..','..', 'client', 'groupsPage.html');
   res.sendFile(filePath)
  }

  @Post()
  createGroup(@Body() createGroupDto: CreateGroupDto) {
    this.groupsService.createGroup(createGroupDto);
  }
}

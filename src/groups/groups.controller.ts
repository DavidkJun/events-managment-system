import { Controller, Get, Res} from '@nestjs/common';
import {Response} from 'express';
import {join} from 'path';

@Controller('groups')
export class GroupsController {
  @Get()
  getGroups(@Res() res: Response): void {
   const filePath = join(__dirname, '..', '..','..', 'client', 'groupsPage.html');
   res.sendFile(filePath)
  }
}

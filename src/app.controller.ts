import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import {Response} from 'express';
import {join} from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomePage(@Res() res: Response): void {
    const filePath = join(__dirname, '..', 'client', 'homePage.html');
    return res.sendFile(filePath);
  }
}


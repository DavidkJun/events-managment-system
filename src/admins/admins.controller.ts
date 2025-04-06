import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAdminDto } from '../dtos/createAdmin.dto';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  getAdmins() {
    return "all admins";
  }
  @Post()
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    this.adminsService.createAdmin(createAdminDto)
  }
}

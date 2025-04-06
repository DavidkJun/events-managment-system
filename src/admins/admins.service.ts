import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../typeorm/Admin';
import { Repository } from 'typeorm';
import { CreateAdminParams } from '../utils/types';

@Injectable()
export class AdminsService {
  constructor(@InjectRepository((Admin)) private readonly adminRepository: Repository<Admin>) {
  }

  createAdmin(adminDetails: CreateAdminParams) {
    const newAdmin = this.adminRepository.create({...adminDetails})
    console.log('New admin created')
    return this.adminRepository.save(newAdmin)
  }
}

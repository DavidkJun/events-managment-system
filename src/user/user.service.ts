import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/User';
import { Repository } from 'typeorm';
import { CreateUserParams } from '../utils/types';

@Injectable()
export class UserService {
  constructor(@InjectRepository((User)) private userRepository: Repository<User>) {}

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({...userDetails});
    console.log('New user created')
    return this.userRepository.save(newUser);
  }
}

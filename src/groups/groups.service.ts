import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../typeorm/Group';
import { Repository } from 'typeorm';
import { CreateGroupParams } from '../utils/types';

@Injectable()
export class GroupsService {
  constructor(@InjectRepository((Group)) private groupRepository: Repository<Group>) {}
  createGroup(groupDetails: CreateGroupParams) {
    const newGroup = this.groupRepository.create({...groupDetails});
    console.log('New group created, now users can join it');
    return this.groupRepository.save(newGroup);
  }
}

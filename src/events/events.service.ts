import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Event} from '../typeorm/Event';
import { Repository } from 'typeorm';
import { CreateEventParams } from '../utils/types';

@Injectable()
export class EventsService {
  constructor(@InjectRepository((Event)) private eventsRepositoty: Repository<Event>) {}

  createEvent(eventDetails: CreateEventParams) {
    const newEvent = this.eventsRepositoty.create({...eventDetails});
    console.log('New Event created new groups can be created')
    return this.eventsRepositoty.save(newEvent)
  }
}

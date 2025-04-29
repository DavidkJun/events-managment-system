import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { EventsService } from './events.service';
import {Response} from 'express';
import {join} from 'path'
import { CreateEventDto } from '../dtos/createEvent.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  displayEvents() {
  }

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    this.eventsService.createEvent(createEventDto)
  }
}

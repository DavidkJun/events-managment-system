import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from '../groups/groups.module';

@Module({
  imports: [
  TypeOrmModule.forFeature([Event]),
    GroupsModule
  ],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}

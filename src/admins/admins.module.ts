import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Admin} from '../typeorm/Admin';
import { GroupsModule } from '../groups/groups.module';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [TypeOrmModule.forFeature([Admin]),
  GroupsModule,
  EventsModule
  ],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}

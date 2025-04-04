import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../typeorm/Group';

@Module({
  imports: [
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
    serveRoot: '/client'
  }), TypeOrmModule.forFeature([Group])
  ],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}

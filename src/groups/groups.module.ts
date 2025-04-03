import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
    serveRoot: '/client'
  })
  ],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}

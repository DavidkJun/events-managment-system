import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { GroupsModule } from './groups/groups.module';
import databaseConfig from '../config/database.config';
import { EventsModule } from './events/events.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig().database),
    GroupsModule,
    EventsModule,
    AdminsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

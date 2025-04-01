import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { UserService } from './src/user/user.service';
import databaseConfig from '../config/database.config';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig().database),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      serveRoot: '/client'
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}

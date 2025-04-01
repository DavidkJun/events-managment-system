import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import entities from '../src/typeorm';

export default ():  {database: TypeOrmModuleOptions}=> ({
  database: {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'test',
    entities: entities,
    synchronize: true,
    dropSchema: true,
  }
});
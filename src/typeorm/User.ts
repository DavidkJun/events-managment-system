import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number

  @Column()
  user_name: string

  @Column()
  user_group_id: number
}

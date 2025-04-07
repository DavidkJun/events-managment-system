import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Group } from './Group';

@Entity({name: 'user', schema: 'eventsdb'})
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number

  @Column({
    nullable: false,
    default: '',
  })
  user_name: string

  @Column({
    type: 'bigint',
    nullable: false,
    default: 0
  })
  user_group_id: number

  @ManyToOne(() => Group, (group) => group.users)
  group: Group
}

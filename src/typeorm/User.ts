import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
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

  @ManyToOne(() => Group, (group) => group.users)
  @JoinColumn({name: 'user_group_id'})
  group: Group
}

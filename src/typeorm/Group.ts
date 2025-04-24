import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Admin } from './Admin';
import { User } from './User';
import { Event } from './Event';

@Entity({name: 'event_group', schema: 'eventsdb'})
export class Group {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number

  @Column({
    nullable: false,
    default: '',
  })
  group_name: string

  @Column({
    type: 'bigint',
    nullable: false,
    default: 0,
  })
  members_amount: number

  @Column({
    type: 'bigint',
    nullable:false,
    default: 0
  })
  event_id: number

  @Column({
    nullable: false,
    default: '',
  })
  activity: string

  @OneToOne(() => Admin, (admin) => admin.group)
  admin: Admin;

  @OneToMany(() => User, (user) => user.group)
  users: User[]

  @ManyToOne(() => Event, (event) => event.groups)
  @JoinColumn({name: 'event_id'})
  event: Event
}

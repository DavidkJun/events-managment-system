import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { Admin } from './Admin';

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
    type: 'bigint',
    nullable: false,
    default: 0
  })
  group_admin_id: number

  @Column({
    nullable: false,
    default: '',
  })
  activity: string

  @OneToOne(() => Admin, (admin) => admin.group)
  admin: Admin;
}

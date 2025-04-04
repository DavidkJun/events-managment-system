import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity({name: 'event_groups', schema: 'eventsdb'})
export class Group {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  group_id: number

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
}

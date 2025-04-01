import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity({name: 'group', schema: 'eventsdb'})
export class Group{
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
  })
  event_id: number

  @Column({
    type: 'bigint',
    nullable: false,
  })
  group_admin_id: number

  @Column({
    nullable: false,
    default: '',
  })
  activity: string
}

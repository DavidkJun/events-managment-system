import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity({name: 'event', schema: 'eventsdb'})
export class Event{
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  event_id: number

  @Column({
    nullable: false,
    default: '',
  })
  event_name: string

  @Column({
    type: 'bigint',
    nullable: false,
    default: 0,
  })
  event_members_amount: number

  @Column({
    type: 'bigint',
    nullable: false,
    default: 0,
  })
  event_groups_amount: number
}

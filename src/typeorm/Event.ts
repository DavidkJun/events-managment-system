import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Event{
  @PrimaryGeneratedColumn()
  event_id: number

  @Column()
  event_name: string

  @Column()
  event_members_amount: number

  @Column()
  event_groups_amount: number
}

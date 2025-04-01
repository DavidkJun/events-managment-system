import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Group{
  @PrimaryGeneratedColumn()
  group_id: number

  @Column()
  group_name: string

  @Column()
  members_amount: number

  @Column()
  event_id: number

  @Column()
  group_admin_id: number

  @Column()
  activity: string
}

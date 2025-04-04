import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity({name: 'user', schema: 'eventsdb'})
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  user_id: number

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
}

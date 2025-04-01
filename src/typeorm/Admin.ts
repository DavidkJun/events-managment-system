import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity({name: 'admin', schema: 'eventsdb'})
export class Admin {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  admin_id: number

  @Column({
    nullable: false,
    default: '',
  })
  admin_name: string

  @Column({
    type: 'bigint',
    nullable: false,
  })
  admin_group_id: number

  @Column({
    nullable: false,
    default: '',
  })
  email: string

  @Column({
    nullable: false,
    default: '',
  })
  password: string
}

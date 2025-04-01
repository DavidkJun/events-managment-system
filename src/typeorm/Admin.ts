import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  admin_id: number

  @Column()
  admin_name: string

  @Column()
  admin_group_id: number

  @Column()
  email: string

  @Column()
  password: string
}

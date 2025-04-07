import { PrimaryGeneratedColumn, Column, Entity, BeforeInsert, OneToOne, JoinColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Group } from './Group';

@Entity({name: 'admin', schema: 'eventsdb'})
export class Admin {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number

  @Column({
    nullable: false,
    default: '',
  })
  admin_name: string

  @Column({
    type: 'bigint',
    nullable: false,
    default: 0
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

  @OneToOne(() => Group, (group) => group.admin)
  @JoinColumn()
  group: Group

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}



import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../users/user.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  teamId: number;

  @Column()
  categoryId: number;

  @Column()
  coachId: number;

  @ManyToMany('Users')
  @JoinTable()
  players: User[];
}

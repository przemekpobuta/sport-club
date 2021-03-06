import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Team } from '../team/team.entity';
import { User } from '../users/user.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany('User', 'category')
  users: User[];

  @OneToMany('Team', 'category')
  teams: Team[];
}

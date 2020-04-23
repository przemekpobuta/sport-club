import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Category } from '../category/category.entity';
import { User } from '../users/user.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  teamId: number;

  @ManyToOne('Category', 'teams')
  category: Category;

  @ManyToOne('User', 'teams')
  coachId: User;
  // One to many players - - - not working yet
  //  @ManyToMany('Users')
  //  @JoinTable()
  //  players: User[];
}

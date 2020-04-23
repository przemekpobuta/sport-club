import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from '../category/category.entity';
import { User } from '../users/user.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Category', 'teams')
  category: Category;

  // coach
  @ManyToOne('User', 'teams')
  user: User;

  // One to many players - - - not working yet
  //  @ManyToMany('Users')
  //  @JoinTable()
  //  players: User[];
}

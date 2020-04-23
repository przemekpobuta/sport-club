import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from '../category/category.entity';
import { Position } from '../position/position.entity';
import { Team } from '../team/team.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToOne('Category', 'users')
  category: Category;

  @ManyToOne('Position', 'users')
  position: Position;

  @OneToMany('Team', 'users')
  userTeams: Team[];
}

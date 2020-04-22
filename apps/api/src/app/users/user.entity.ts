import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from '../category/category.entity';
import { Position } from '../position/position.entity';

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
}

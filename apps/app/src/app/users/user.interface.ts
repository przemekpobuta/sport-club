import { Category } from '../categories/category.interface';
import { Position } from '../positions/position.interface';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  position: Position;
  category: Category;
}

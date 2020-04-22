import { User } from '../users/user.interface';

export interface Team {
  id: number;
  categoryId: number;
  coachId: number;
  playersIds: number[];
  users: User[];
}

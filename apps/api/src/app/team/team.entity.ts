import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  teamId: number;

  @Column()
  categoryId: number;

  @Column()
  coachId: number;
}

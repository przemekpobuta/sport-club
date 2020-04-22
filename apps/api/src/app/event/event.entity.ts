import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  eventId: number;

  @Column()
  teamId: number;

  @Column()
  description: string;
}

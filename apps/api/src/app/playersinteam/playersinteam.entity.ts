import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlayersInTeam {
  @PrimaryGeneratedColumn()
  playersInTeamId: number;

  @Column()
  userId: number;

  @Column()
  teamId: number;
}

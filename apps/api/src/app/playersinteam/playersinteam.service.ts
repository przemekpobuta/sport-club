import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayersInTeam } from './playersinteam.entity';
import { CreatePlayersInTeamDto } from './dto/create-playersinteam.dto';

@Injectable()
export class PlayersInTeamService {
  constructor(
    @InjectRepository(PlayersInTeam)
    private readonly playersInTeamRepository: Repository<PlayersInTeam>
  ) {}

  create(
    createplayersInTeamDto: CreatePlayersInTeamDto
  ): Promise<PlayersInTeam> {
    const playersInTeam = new PlayersInTeam();
    playersInTeam.teamId = createplayersInTeamDto.teamId;
    playersInTeam.userId = createplayersInTeamDto.userId;

    return this.playersInTeamRepository.save(playersInTeam);
  }

  async findAll(): Promise<PlayersInTeam[]> {
    return this.playersInTeamRepository.find();
  }

  findOne(playersInTeamId: string): Promise<PlayersInTeam> {
    return this.playersInTeamRepository.findOne(playersInTeamId);
  }

  async remove(playersInTeamId: string): Promise<void> {
    await this.playersInTeamRepository.delete(playersInTeamId);
  }
}

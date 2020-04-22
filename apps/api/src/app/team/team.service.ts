import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>
  ) {}

  create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = new Team();
    // team.categoryId = createTeamDto.categoryId;
    // team.coachId = createTeamDto.coachId;

    return this.teamRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  findOne(teamId: string): Promise<Team> {
    return this.teamRepository.findOne(teamId);
  }

  async remove(teamId: string): Promise<void> {
    await this.teamRepository.delete(teamId);
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './team.entity';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Get(':teamId')
  findOne(@Param('teamId') id: string): Promise<Team> {
    return this.teamService.findOne(id);
  }

  @Delete(':teamId')
  remove(@Param('teamId') id: string): Promise<void> {
    return this.teamService.remove(id);
  }
}

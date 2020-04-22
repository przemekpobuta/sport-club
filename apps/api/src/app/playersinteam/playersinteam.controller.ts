import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreatePlayersInTeamDto } from './dto/create-playersinteam.dto';
import { PlayersInTeam } from './playersinteam.entity';
import { PlayersInTeamService } from './playersinteam.service';

@Controller('playersInTeam')
export class PlayersInTeamController {
  constructor(private readonly playersInTeamService: PlayersInTeamService) {}

  @Post()
  create(
    @Body() createPlayersInTeamDto: CreatePlayersInTeamDto
  ): Promise<PlayersInTeam> {
    return this.playersInTeamService.create(createPlayersInTeamDto);
  }

  @Get()
  findAll(): Promise<PlayersInTeam[]> {
    return this.playersInTeamService.findAll();
  }

  @Get(':playersInTeamId')
  findOne(@Param('playersInTeamId') id: string): Promise<PlayersInTeam> {
    return this.playersInTeamService.findOne(id);
  }

  @Delete(':playersInTeamId')
  remove(@Param('playersInTeamId') id: string): Promise<void> {
    return this.playersInTeamService.remove(id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersInTeam } from './playersinteam.entity';
import { PlayersInTeamController } from './playersinteam.controller';
import { PlayersInTeamService } from './playersinteam.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlayersInTeam])],
  providers: [PlayersInTeamService],
  controllers: [PlayersInTeamController]
})
export class PlayersInTeamModule {}

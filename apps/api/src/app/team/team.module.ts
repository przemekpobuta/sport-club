import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from '../users/users.module';
import { TeamController } from './team.controller';
import { Team } from './team.entity';
import { TeamService } from './team.service';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), UsersModule, CategoryModule],
  providers: [TeamService],
  controllers: [TeamController]
})
export class TeamModule {}

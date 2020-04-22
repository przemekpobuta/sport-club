import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from './category/category.module';
import { EventModule } from './event/event.module';
import { PlayersInTeamModule } from './playersinteam/playersinteam.module';
import { PositionModule } from './position/position.module';
import { TeamModule } from './team/team.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true
    }),
    CategoryModule,
    UsersModule,
    PositionModule,
    TeamModule,
    PlayersInTeamModule,
    EventModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

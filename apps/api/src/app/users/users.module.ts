import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from '../category/category.module';
import { PositionModule } from '../position/position.module';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PositionModule, CategoryModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}

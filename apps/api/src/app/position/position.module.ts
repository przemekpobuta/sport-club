import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PositionController } from './position.controller';
import { Position } from './position.entity';
import { PositionService } from './position.service';

@Module({
  imports: [TypeOrmModule.forFeature([Position])],
  providers: [PositionService],
  controllers: [PositionController],
  exports: [TypeOrmModule]
})
export class PositionModule {}

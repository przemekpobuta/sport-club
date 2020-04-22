import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreatePositionDto } from './dto/create-position.dto';
import { Position } from './position.entity';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body() createPositionDto: CreatePositionDto): Promise<Position> {
    return this.positionService.create(createPositionDto);
  }

  @Get()
  findAll(): Promise<Position[]> {
    return this.positionService.findAll();
  }

  @Get(':positionId')
  findOne(@Param('positionId') id: string): Promise<Position> {
    return this.positionService.findOne(id);
  }

  @Delete(':positionId')
  remove(@Param('positionId') id: string): Promise<void> {
    return this.positionService.remove(id);
  }
}

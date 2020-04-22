import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from './position.entity';
import { CreatePositionDto } from './dto/create-position.dto';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>
  ) {}

  create(createPositionDto: CreatePositionDto): Promise<Position> {
    const position = new Position();
    position.name = createPositionDto.name;

    return this.positionRepository.save(position);
  }

  async findAll(): Promise<Position[]> {
    return this.positionRepository.find();
  }

  findOne(positionId: string): Promise<Position> {
    return this.positionRepository.findOne(positionId);
  }

  async remove(positionId: string): Promise<void> {
    await this.positionRepository.delete(positionId);
  }
}

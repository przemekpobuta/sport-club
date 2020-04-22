import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from '../category/category.entity';
import { Position } from '../position/position.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
    @InjectRepository(Position)
    private readonly positionsRepository: Repository<Position>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.category = await this.categoriesRepository.findOne(
      createUserDto.categoryId
    );
    user.position = await this.positionsRepository.findOne(
      createUserDto.positionId
    );

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['category', 'position'] });
  }

  findOne(userId: string): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  async remove(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }
}

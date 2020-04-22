import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class categoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const user = new Category();
    user.firstName = createCategoryDto.firstName;
    user.lastName = createCategoryDto.lastName;

    return this.categoryRepository.save(user);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(userId: string): Promise<Category> {
    return this.categoryRepository.findOne(userId);
  }

  async remove(userId: string): Promise<void> {
    await this.categoryRepository.delete(userId);
  }
}

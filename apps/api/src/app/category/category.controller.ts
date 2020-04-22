import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':categoryId')
  findOne(@Param('categoryId') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Delete(':categoryId')
  remove(@Param('categoryId') id: string): Promise<void> {
    return this.categoryService.remove(id);
  }
}

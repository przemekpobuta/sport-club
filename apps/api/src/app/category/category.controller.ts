import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';
import { categoryService } from './category.service';

@Controller('category')
export class categoryController {
  constructor(private readonly categoryService: categoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':userId')
  findOne(@Param('userId') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Delete(':userId')
  remove(@Param('userId') id: string): Promise<void> {
    return this.categoryService.remove(id);
  }
}

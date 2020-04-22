import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { categoryController } from './category.controller';
import { categoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [categoryService],
  controllers: [categoryController]
})
export class CategoryModule {}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':userId')
  findOne(@Param('userId') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':userId')
  remove(@Param('userId') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    CategoryModule,
    PositionModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

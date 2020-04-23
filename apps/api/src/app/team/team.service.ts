import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//import { User } from '../users/user.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './team.entity';
import { Category } from '../category/category.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team> //@InjectRepository(User) //private readonly userRepository: Repository<User>
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = new Team();
    // team.categoryId = createTeamDto.categoryId;
    // team.coachId = createTeamDto.coachId;
    // o one to many
    //team.players = await this.userRepository.findByIds(
    //  createTeamDto.playersIds
    //);
    team.category = await this.categoriesRepository.findOne(
      createTeamDto.categoryId
    );

    return this.teamRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find({
      relations: ['user', 'category'] //, 'players']
    });
  }

  findOne(teamId: string): Promise<Team> {
    return this.teamRepository.findOne(teamId);
  }

  async remove(teamId: string): Promise<void> {
    await this.teamRepository.delete(teamId);
  }
}

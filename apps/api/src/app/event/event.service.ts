import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
  ) {}

  create(createEventDto: CreateEventDto): Promise<Event> {
    const event = new Event();
    event.teamId = createEventDto.teamId;
    event.description = createEventDto.description;

    return this.eventRepository.save(event);
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  findOne(eventId: string): Promise<Event> {
    return this.eventRepository.findOne(eventId);
  }

  async remove(eventId: string): Promise<void> {
    await this.eventRepository.delete(eventId);
  }
}

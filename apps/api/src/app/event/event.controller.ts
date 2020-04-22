import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.entity';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventService.create(createEventDto);
  }

  @Get()
  findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':eventId')
  findOne(@Param('eventId') id: string): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Delete(':eventId')
  remove(@Param('eventId') id: string): Promise<void> {
    return this.eventService.remove(id);
  }
}

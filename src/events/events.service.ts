import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import EventNotFoundException from './exceptions/event-not-found.exception';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const newEvent = this.eventsRepository.create(createEventDto);
    await this.eventsRepository.save(newEvent);
    return newEvent;
  }

  findAll() {
    return this.eventsRepository.find();
  }

  async findOne(id: number) {
    const event = await this.eventsRepository.findOne(id);
    if (event) {
      return event;
    }
    throw new EventNotFoundException(id);
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    await this.eventsRepository.update(id, updateEventDto);
    const updatedEvent = await this.eventsRepository.findOne(id);
    if (updatedEvent) {
      return updatedEvent;
    }
    throw new EventNotFoundException(id);
  }

  async remove(id: number) {
    const deleteResponse = await this.eventsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new EventNotFoundException(id);
    }
  }
}

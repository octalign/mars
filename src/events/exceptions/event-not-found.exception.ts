import { NotFoundException } from '@nestjs/common';

class EventNotFoundException extends NotFoundException {
  constructor(eventId: number) {
    super(`Event with id ${eventId} not found`);
  }
}

export default EventNotFoundException;

import { NotFoundException } from '@nestjs/common';

class OrganizationNotFoundException extends NotFoundException {
  constructor(organizationId: number) {
    super(`Organization with id ${organizationId} not found`);
  }
}

export default OrganizationNotFoundException;

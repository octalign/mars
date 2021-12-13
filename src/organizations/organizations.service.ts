import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import OrganizationNotFoundException from './exceptions/organization-not-found.exception';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationsRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const newOrganization = this.organizationsRepository.create(
      createOrganizationDto,
    );
    await this.organizationsRepository.save(newOrganization);
    return newOrganization;
  }

  findAll() {
    return this.organizationsRepository.find({ relations: ['events'] });
  }

  async findOne(id: number) {
    const organization = await this.organizationsRepository.findOne(id, {
      relations: ['events'],
    });
    if (organization) {
      return organization;
    }
    throw new OrganizationNotFoundException(id);
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    await this.organizationsRepository.update(id, updateOrganizationDto);
    const updatedOrganization = await this.organizationsRepository.findOne(id, {
      relations: ['events'],
    });
    if (updatedOrganization) {
      return updatedOrganization;
    }
    throw new OrganizationNotFoundException(id);
  }

  async remove(id: number) {
    const deleteResponse = await this.organizationsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new OrganizationNotFoundException(id);
    }
  }
}

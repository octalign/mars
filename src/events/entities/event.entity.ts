import { Organization } from '../../organizations/entities/organization.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @ManyToOne(
    () => Organization,
    (organization: Organization) => organization.events,
  )
  public organization: Organization;
}

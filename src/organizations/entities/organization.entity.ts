import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Event } from '../../events/entities/event.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Event, (event: Event) => event.organization)
  public events?: Event[];
}

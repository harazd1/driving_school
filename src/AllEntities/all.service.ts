import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fleet } from '../Fleets/fleet.model';
import { Instructor } from '../Instructors/instructor.model';

@Injectable()
export class AllService {
  constructor(
    @InjectRepository(Fleet)
    private readonly fleetRepository: Repository<Fleet>,
  ) {}

  async findFleetsByInstructorId(instructorId: number): Promise<Fleet[]> {
    return this.fleetRepository
      .createQueryBuilder('f')
      .innerJoin(Instructor, 'i', 'f.id = i.Car')
      .where('i.id = :instructorId', { instructorId })
      .getMany();
  }
}

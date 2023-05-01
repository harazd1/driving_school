import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fleet } from '../Fleets/fleet.model';
import { Instructor } from '../Instructors/instructor.model';
import { Cadet } from '../Cadets/cadet/cadet.model';

@Injectable()
export class AllService {
  constructor(
    @InjectRepository(Fleet)
    private readonly fleetRepository: Repository<Fleet>,
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
    @InjectRepository(Cadet)
    private readonly cadetRepository: Repository<Cadet>
  ) {}

  async findFleetsByInstructorId(instructorId: number): Promise<Fleet[]> {
    return this.fleetRepository
      .createQueryBuilder('f')
      .innerJoin(Instructor, 'i', 'f.id = i.carId')
      .where('i.id = :instructorId', { instructorId })
      .getMany();
  }

  async findAllInstructorsAndCars(): Promise<Instructor[]> {
    return this.instructorRepository
      .createQueryBuilder('i')
      .leftJoinAndSelect('fleets', 'f', 'f.id = i.carId')
      .select(['i.id', 'i.Name', 'i.Surname', 'COALESCE(f.Plate, \'\') as Plate', 'COALESCE(f.Brand, \'\') as Brand', 'COALESCE(f.Model, \'\') as Model'])
      .orderBy('i.id')
      .getRawMany();
  }
  
  async findAllInstructorsAndCarsAndCadets(): Promise<any[]> {
    return this.instructorRepository
      .createQueryBuilder('i')
      .leftJoin(Fleet, 'f', 'f.id = i.carId')
      .leftJoin(Cadet, 'c', 'c.Category = i.Category')
      .select([
        'i.id',
        'i.Name',
        'i.Surname',
        'f.Plate',
        'f.Brand',
        'f.Model',
        'c.Name',
        'c.Surname',
        'c.Category',
      ])
      .getRawMany();
  }

  async deleteAllNull() {
    await Promise.all([
      this.cadetRepository.delete({ Name: "" }),
      this.instructorRepository.delete({ Name: "" }),
      this.fleetRepository.delete({ Plate: "" })
    ]);
  }
  

  
}

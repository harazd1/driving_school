import { Controller, Get, Param, Delete } from '@nestjs/common';
import { Fleet } from '../Fleets/fleet.model';
import { AllService } from './all.service';
import { Instructor } from '../Instructors/instructor.model';

@Controller('all')
export class AllController {
  constructor(private readonly allService: AllService) {}

  @Get(':instructorId/fleets')
  async findFleetsByInstructorId(
    @Param('instructorId') instructorId: number,
  ): Promise<Fleet[]> {
    return this.allService.findFleetsByInstructorId(instructorId);
  }

  @Get('instructors')
  async findAllInstructorsAndCars(): Promise<Instructor[]> {
    return this.allService.findAllInstructorsAndCars();
  }

  @Get('instructors/cars/cadets')
  async findAllInstructorsAndCarsAndCadets() {
    return this.allService.findAllInstructorsAndCarsAndCadets();
  }

  @Delete('delete-all-null')
  deleteAllNull() {
    return this.allService.deleteAllNull();
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { Fleet } from '../Fleets/fleet.model';
import { AllService } from './all.service';

@Controller('all')
export class AllController {
  constructor(private readonly allService: AllService) {}

  @Get(':instructorId/fleets')
  async findFleetsByInstructorId(
    @Param('instructorId') instructorId: number,
  ): Promise<Fleet[]> {
    return this.allService.findFleetsByInstructorId(instructorId);
  }
}

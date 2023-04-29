import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fleet } from '../Fleets/fleet.model';
import { Instructor } from '../Instructors/instructor.model';
import { AllController } from './all.controller';
import { AllService } from './all.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fleet, Instructor])],
  controllers: [AllController],
  providers: [AllService],
})
export class ALLModule {}

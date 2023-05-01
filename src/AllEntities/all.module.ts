import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fleet } from '../Fleets/fleet.model';
import { Instructor } from '../Instructors/instructor.model';
import { AllController } from './all.controller';
import { AllService } from './all.service';
import { Cadet } from '../Cadets/cadet/cadet.model';

@Module({
  imports: [TypeOrmModule.forFeature([Fleet, Instructor, Cadet])],
  controllers: [AllController],
  providers: [AllService],
})
export class ALLModule {}

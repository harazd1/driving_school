import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadet } from './Cadets/cadet/cadet.model';
import { CadetModule } from './Cadets/cadet/cadet.module';
import { Fleet } from './Fleets/fleet.model';
import { FleetModule } from './Fleets/fleet.module';
import { Instructor } from './Instructors/instructor.model';
import { InstructorModule } from './Instructors/instructor.module';
import { ALLModule } from './AllEntities/all.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'password',
      database:'driving_school',
      entities:[Cadet, Instructor, Fleet],
      synchronize: true,
    }),
     CadetModule,
     InstructorModule,
     FleetModule,
     ALLModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { forwardRef, Module } from '@nestjs/common';
import { InstructorController } from './instructor.controller';
import { Instructor } from './instructor.model';
import { InstructorService } from './instructor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [InstructorController],
    providers: [InstructorService],
    imports: [
      TypeOrmModule.forFeature([Instructor])
    ],
      exports: [
        InstructorService,
      ]
  })

export class InstructorModule {}

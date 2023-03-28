import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instructor } from './instructor.model';

@Injectable()
export class InstructorService {
    constructor(
        @InjectRepository(Instructor) private instructorRepository: Repository<Instructor>
      ) {}

      getAllInstructors() {
        return this.instructorRepository.find();
      }

      createInstructor(body) {
        const newCadet = this.instructorRepository.create(body);
        return this.instructorRepository.save(newCadet);
      }

      deleteInstructor(id: number) {
        return this.instructorRepository.delete({ id });
      }

      getInstructor(id) {
        return this.instructorRepository.findOneBy({id: id});
      }

      updateInstructor(id: number, body) {
        return this.instructorRepository.update({ id }, body );
      }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cadet } from './cadet.model';

@Injectable()
export class CadetService {
    constructor(
        @InjectRepository(Cadet) private cadetRepository: Repository<Cadet>
      ) {}

      getAllCadets() {
        return this.cadetRepository.find();
      }

      createCadet(body) {
        const newCadet = this.cadetRepository.create(body);
        return this.cadetRepository.save(newCadet);
      }

      deleteCadet(id: number) {
        return this.cadetRepository.delete({ id });
      }

      getCadet(id) {
        return this.cadetRepository.findOneBy({id: id});
      }

      sortCadet(){
        return this.cadetRepository.find({
          order: {
            Name: 'ASC',
          },
        });
      }
}

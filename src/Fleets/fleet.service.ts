import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fleet } from './fleet.model';

@Injectable()
export class FleetService {
    constructor(
        @InjectRepository(Fleet) private fleetRepository: Repository<Fleet>
      ) {}

      getAllFleets() {
        return this.fleetRepository.find();
      }

      createFleet(body) {
        const newCadet = this.fleetRepository.create(body);
        return this.fleetRepository.save(newCadet);
      }

      deleteFleet(id: number) {
        return this.fleetRepository.delete({ id });
      }

      getFleet(id) {
        return this.fleetRepository.findOneBy({id: id});
      }
}

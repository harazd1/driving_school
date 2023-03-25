import { forwardRef, Module } from '@nestjs/common';
import { FleetController } from './fleet.controller';
import { Fleet } from './fleet.model';
import { FleetService } from './fleet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [FleetController],
    providers: [FleetService],
    imports: [
      TypeOrmModule.forFeature([Fleet])
    ],
      exports: [
        FleetService,
      ]
  })

export class FleetModule {}

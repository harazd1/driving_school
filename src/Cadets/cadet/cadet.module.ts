import { forwardRef, Module } from '@nestjs/common';
import { CadetController } from './cadet.controller';
import { Cadet } from './cadet.model';
import { CadetService } from './cadet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [CadetController],
    providers: [CadetService],
    imports: [
      TypeOrmModule.forFeature([Cadet])
    ],
      exports: [
          CadetService,
      ]
  })

export class CadetModule {}

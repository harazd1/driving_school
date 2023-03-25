import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { FleetService } from './fleet.service';

@Controller('fleet')
export class FleetController {
    constructor (private fleetService: FleetService){}

    @Get()
    getAll(){
        return this.fleetService.getAllFleets();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.fleetService.getFleet(id);
    }

    @Delete(':id')
    deleteFleet(@Param('id') id: number) {
        return this.fleetService.deleteFleet(id);
     }

    @Post()
    createFleet(@Body() body){
        return this.fleetService.createFleet(body)
    }
}

import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Body, Post, Put } from '@nestjs/common/decorators';
import { CadetService } from './cadet.service';

@Controller('cadet')
export class CadetController {
    constructor (private cadetService: CadetService){}

    @Get()
    getAll(){
        return this.cadetService.getAllCadets();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.cadetService.getCadet(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.cadetService.deleteCadet(id);
     }

    @Post()
    createCadet(@Body() body){
        return this.cadetService.createCadet(body)
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() body) {
        return this.cadetService.updateCadet(id, body)
    }


}

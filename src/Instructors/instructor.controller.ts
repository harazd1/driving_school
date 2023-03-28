import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Body, Post, Put } from '@nestjs/common/decorators';
import { InstructorService } from './instructor.service';

@Controller('instructor')
export class InstructorController {
    constructor (private instructorService: InstructorService){}

    @Get()
    getAll(){
        return this.instructorService.getAllInstructors();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.instructorService.getInstructor(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.instructorService.deleteInstructor(id);
     }

    @Post()
    createCadet(@Body() body){
        return this.instructorService.createInstructor(body)
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() body) {
        return this.instructorService.updateInstructor(id, body)
    }
}

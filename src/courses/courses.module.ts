import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/courses.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Course])], //precisa desse import para o controler conseguir manipular o typeorm
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule { }

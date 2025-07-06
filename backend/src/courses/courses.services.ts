import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.coursesRepository.find();
  }

  async updateCourse(id: number, updateData: any): Promise<any> {
    const dbUpdate: Partial<Course> = {};

    if (updateData.title !== undefined) dbUpdate.title = updateData.title;
    if (updateData.imageUrl !== undefined)
      dbUpdate.imageUrl = updateData.imageUrl;
    if (updateData.description !== undefined)
      dbUpdate.description = updateData.description;

    await this.coursesRepository.update(id, dbUpdate);
    return this.coursesRepository.findOneBy({ id });
  }
}

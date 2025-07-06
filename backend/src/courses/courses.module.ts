import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './courses.entity';
import { CoursesService } from './courses.services';
import { CoursesController } from './courses.controller';
import { FileUploadService } from 'src/fileUpload/file-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CoursesController],
  providers: [CoursesService, FileUploadService],
  exports: [CoursesService],
})
export class CoursesModule {}

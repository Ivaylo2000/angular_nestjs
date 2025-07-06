import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Inject,
} from '@nestjs/common';
import { CoursesService } from './courses.services';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { FileUploadService } from './../fileUpload/file-upload.service';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly courseService: CoursesService,
    @Inject(FileUploadService)
    private readonly fileUploadService: FileUploadService,
  ) {}

  @Get()
  async getAll() {
    return this.courseService.findAll();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async updateCourse(
    @Param('id') id: string,
    @Body()
    updateData: { title?: string; imageUrl?: string; description?: string },
    @UploadedFile() image?: Express.Multer.File,
  ) {
    if (image) {
      updateData.imageUrl = await this.fileUploadService.saveFile(image);
    }
    console.log('updateData', updateData);
    return this.courseService.updateCourse(Number(id), updateData);
  }
}

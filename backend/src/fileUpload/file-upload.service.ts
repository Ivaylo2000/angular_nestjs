import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class FileUploadService {
  private readonly uploadDir = './public/images';

  async saveFile(file: Express.Multer.File): Promise<string> {
    await this.ensureUploadDirExists();
    const fileName = `course-${Date.now()}${path.extname(file.originalname)}`;
    const filePath = path.join(this.uploadDir, fileName);
    await fs.writeFile(filePath, file.buffer);
    return `/images/${fileName}`;
  }

  private async ensureUploadDirExists() {
    try {
      await fs.mkdir(this.uploadDir, { recursive: true });
    } catch (err) {
      console.error('Could not create upload directory', err);
    }
  }
}

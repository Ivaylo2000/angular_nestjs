import { Component, OnInit, ViewChildren } from '@angular/core';
import { InputWithImageComponent } from '../input-with-image/input-with-image.component';
import { CoursesService } from '../../services/courses.services';
import { Course } from '../../../interfaces/ICourse';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';

interface EditableCourse extends Course {
  editing?: boolean;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [InputWithImageComponent, NgFor, NgIf, FormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  text: string = '';
  courses: EditableCourse[] = [];
  originalCourseData = new Map<number, Course>();
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private authService: AuthService
  ) {}

  get isLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  get filteredCourses() {
    const query = this.text.toLowerCase().trim();
    return this.courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
    );
  }

  ngOnInit() {
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses.map((c) => ({ ...c, editing: false }));
      },
      error: (err) => console.error('Failed to load courses', err),
    });
  }

  toggleEdit(course: EditableCourse) {
    if (!course.editing) {
      this.originalCourseData.set(course.id, { ...course });
    }
    course.editing = !course.editing;
  }

  async saveCourse(course: EditableCourse) {
    try {
      const fileInput = document.getElementById(
        `file-upload-${course.id}`
      ) as HTMLInputElement;
      const imageFile = fileInput?.files?.[0];

      const updatedCourse = await lastValueFrom(
        this.coursesService.updateCourse(
          course.id,
          {
            title: course.title,
            description: course.description,
          },
          imageFile
        )
      );

      Object.assign(course, updatedCourse);
      course.editing = false;
      this.originalCourseData.delete(course.id);
    } catch (error) {
      console.error('Update failed:', error);
      this.cancelEdit(course);
    }
  }

  cancelEdit(course: EditableCourse) {
    const original = this.originalCourseData.get(course.id);
    if (original) {
      Object.assign(course, original);
      this.originalCourseData.delete(course.id);
    }
    course.editing = false;
  }

  onFileSelected(event: Event, course: EditableCourse) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        course.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  redirectToLogin() {
    this.router.navigate(['/']);
  }

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Logout failed:', err);
      },
    });
  }
}

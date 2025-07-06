import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/ICourse';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

  updateCourse(
    id: number,
    updateData: { title?: string; description?: string },
    image?: File
  ): Observable<Course> {
    const formData = new FormData();

    if (updateData.title) formData.append('title', updateData.title);
    if (updateData.description)
      formData.append('description', updateData.description);

    if (image) formData.append('image', image);

    const token = localStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : undefined;

    return this.http.put<Course>(`${this.baseUrl}/courses/${id}`, formData, {
      headers,
    });
  }
}

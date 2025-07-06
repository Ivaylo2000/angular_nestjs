import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
];

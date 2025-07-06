import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputWithImageComponent } from '../input-with-image/input-with-image.component';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, InputWithImageComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  passwordFieldType = 'password';

  constructor(private authService: AuthService, private router: Router) {}
  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/courses']);
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });
  }
}

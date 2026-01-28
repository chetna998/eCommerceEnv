import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  isLoading = false;

  private authService = inject(AuthService)
  private router = inject(Router);

  handleSubmit() {
    if (!this.email || !this.password) return;
    this.isLoading = true;
    //set temp loggedIn flag
    this.authService.login({ username: this.email, password: this.password }).subscribe({
      next: success => {
        this.isLoading = false
        if(success) {
          sessionStorage.setItem('sessionKey', success.access_token);
          this.router.navigate(['/'])
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}

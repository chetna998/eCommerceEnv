import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';

export const loggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if (authService.getSession()) {
    router.navigate(['/user']);
    return false;
  }else {
    return true;
  }
};

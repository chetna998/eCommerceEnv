import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { delay, of, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common'; //ssr don;t have session

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);

  login(data: { email: string; password: string }) {
    const isValid = data.email === 'admin@me.com' && data.password === '123';

    return of(isValid).pipe(
      delay(500),
      tap((success) => {
        if (success) {
          sessionStorage.setItem('sessionKey', 'admin');
        }
      })
    );
  }

  logout() {
    sessionStorage.removeItem('sessionKey');
  }

  getSession() {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('sessionKey') ? sessionStorage.getItem('sessionKey') : null;
    }
    return null;
  }

  private getInitialLoginState(): boolean {
    // Check if the code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // If it is the browser, safely check sessionStorage
      return !!sessionStorage.getItem('sessionKey');
    }
    // If it is the server (SSR), return false
    return false;
  }
}

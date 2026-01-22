import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { delay, of, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common'; //ssr don;t have session
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoginResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient)
  private authUrl = `${environment.apiBaseUrl}/auth`

  // login(data: { email: string; password: string }) {
  //   const isValid = data.email === 'admin@me.com' && data.password === '123';

  //   return of(isValid).pipe(
  //     delay(500),
  //     tap((success) => {
  //       if (success) {
  //         sessionStorage.setItem('sessionKey', 'admin');
  //       }
  //     })
  //   );
  // }
  login(data: { username: string; password: string }){
    return this.http.post<LoginResponse>(`${this.authUrl}/login`, data)
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
}

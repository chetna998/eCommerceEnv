import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL='https://reqres.in/api/users'
  private baseUrl = `${environment.apiBaseUrl}`
  private http = inject(HttpClient)

  getUsers():Observable<any> {
    return this.http.get<any>(this.API_URL).pipe(
      map((res) => {
        return res.data
      })
    )
  }

  getUserProfile():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/profile`).pipe(
      map((res) => {
        return res.data
      })
    )
  }
}

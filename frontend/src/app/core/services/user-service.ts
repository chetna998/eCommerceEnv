import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL='https://reqres.in/api/users'
  private http = inject(HttpClient)

  getUsers():Observable<any> {
    return this.http.get<any>(this.API_URL).pipe(
      map((res) => {
        return res.data
      })
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { User } from '../../models/user.model';


export interface Credentials {
  username: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);
  private BASE_URL = 'http://localhost:8000'

  user = signal<User | null | undefined>(undefined)


  constructor() { }
 
  login(credentials: Credentials): Observable<User |null |undefined>{

    return this.http.post(this.BASE_URL + 'sessions/login/',credentials).pipe(
      tap((result: any) => {
        localStorage.setItem('token', result['token']);
        const user = Object.assign(new User(), result['user']);
        this.user.set(user)
      }),
      map((result: any) =>{
        return this.user()
      })
    )

  }
}

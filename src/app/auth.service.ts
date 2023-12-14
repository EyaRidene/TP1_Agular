import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './login/model/user.model';
import { LoginData } from './login/model/loginData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /*private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {
    this.refreshAuthState();
  }

  login(data: LoginData): Observable<boolean> {
    return this.http
      .post('https://apilb.tridevs.net/api/Users/login', data)
      .pipe(
        map((response: any) => {
          const authToken = {
            token: response.id,
            ttl: response.ttl,
          };

          const user = new User(response.userId, data.email);
          localStorage.setItem('AuthToken', JSON.stringify(authToken));
          localStorage.setItem('User', JSON.stringify(user));

          this.refreshAuthState();
          return true;
        }),
        catchError((error: any) => {
          this.refreshAuthState();
          return of(false);
        })
      );
  }

  logout() {
    const user = localStorage.getItem('User');
    if (!user) {
      return false;
    }
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('User');
    this.refreshAuthState();
    return true;
  }

  refreshAuthState() {
    const userFound = localStorage.getItem('User');
    if (!userFound) {
      this.user.next(null);
    } else {
      const user: User = JSON.parse(userFound);
      this.user.next(new User(user.id, user.email));
    }
  }*/
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../login/model/user.model';
import { LoginData } from '../login/model/loginData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  link = 'https://apilb.tridevs.net/api/Users/login';
  login(credentials: LoginData) {
    return this.http.post(this.link, credentials);
  }
}

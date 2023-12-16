import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { LoginData } from './model/loginData';
import { tap } from 'rxjs';
import { User } from './model/user.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  id: string = '';
  /*private authService: AuthService = inject(AuthService);
  constructor() {}

  router: Router = inject(Router);
  showError = false;
  login(formulaire: NgForm) {
    const data: LoginData = new LoginData(
      formulaire.form.value.email,
      formulaire.form.value.password
    );
    this.authService
      .login(data)
      .pipe(
        tap((authenticated) => {
          if (authenticated) {
            alert('Vous êtes authentifié !');
            this.router.navigate(['cv']);
          } else {
            this.showError = true;
          }
        })
      )
      .subscribe();
  }*/
  login(dto: LoginData) {
    console.log(dto);
    return this.http
      .post<Response>('https://apilb.tridevs.net/api/Users/login', dto)
      .pipe(
        tap((res) => {
          console.log(res);
          const token = {
            token: 'test',
            email: dto.email,
            //id: userId,
          };
          console.log(token);
          localStorage.setItem('user', 'test');
          this.router.navigate(['cv']);
        })
      );
  }
}

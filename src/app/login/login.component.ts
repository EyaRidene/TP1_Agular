import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { LoginData } from './model/loginData';
import { tap } from 'rxjs';
import { User } from './model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

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
  login(loginFormulaire: any) {
    this.auth.login(loginFormulaire).subscribe(
      (response) => {
        const token =
          '1Q5VSZ2XJrFZNL5IeYi4eCl55TDaLLALDwR1pftuYkiQHaC5RuowcHeqPoK2dXgX';
        localStorage.setItem('token', token);
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

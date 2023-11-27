import { AuthService } from '../auth.service';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LoginData } from './model/loginData';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);
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
  }
}

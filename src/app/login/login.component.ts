import { Component, inject } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
  login(loginFormulaire: any) {}
}

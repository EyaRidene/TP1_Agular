// navbar.component.ts
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  /*constructor() {}

  private authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  loggedIn: boolean = false;

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.loggedIn = !!user;
    });
  }

  logout() {
    if (this.authService.logout()) {
      alert('Logged Out !');
      this.router.navigate(['cv']);
    } else {
      alert('An error has occurred. Please try again !');
    }
  }*/
}

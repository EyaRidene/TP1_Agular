import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CvComponent } from './exCv/cv/cv.component';
import { Ex1Component } from './ex1_2/ex1.component';
import { PageDetailComponent } from './exCv/page-detail/page-detail.component';
import { LoginComponent } from './login/login.component';
//import { loginGuard } from './login/login.guard';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cv/:id', component: PageDetailComponent },
  { path: 'ex1', component: Ex1Component },
  { path: 'onlyHeader', component: NavbarComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);

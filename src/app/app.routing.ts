import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CvComponent } from './exCv/cv/cv.component';
import { Ex1Component } from './ex1_2/ex1.component';
import { PageDetailComponent } from './exCv/page-detail/page-detail.component';
import { LoginComponent } from './login/login.component';
//import { loginGuard } from './login/login.guard';
import { HomeComponent } from './components/home/home.component';
import { StyleComponent } from './directives/style/style.component';
import { ClassComponent } from './directives/class/class.component';
import { RouterParamComponent } from './components/router-param/router-param.component';
import { ErrorComponent } from './components/error/error.component';
import { AddCvComponent } from './exCv/add-cv/add-cv.component';
import { loginGuard } from './login/login.guard';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  /*{
    path: 'cv',component :CvComponent,
    children: [
      { path: ':id', component: PageDetailComponent },
    ],
  },*/
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddCvComponent },
      { path: ':id', component: PageDetailComponent },
    ],
  },
  { path: 'ngStyle', component: StyleComponent },
  { path: 'class', component: ClassComponent },
  { path: 'color/:default', component: RouterParamComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },

  { path: 'ex1', component: Ex1Component },
  { path: 'onlyHeader', component: NavbarComponent },
  { path: '**', component: ErrorComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);

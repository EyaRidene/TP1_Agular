import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CvComponent } from './exCv/cv/cv.component';
import { Ex1Component } from './ex1_2/ex1.component';
import { PageDetailComponent } from './exCv/page-detail/page-detail.component';

const APP_ROUTES: Routes = [
  { path: 'cv', component: CvComponent },
  { path: '', redirectTo: '/cvs', pathMatch: 'full' },
  { path: 'cv/:id', component: PageDetailComponent },
  { path: 'ex1', component: Ex1Component },
  { path: 'onlyHeader', component: NavbarComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);

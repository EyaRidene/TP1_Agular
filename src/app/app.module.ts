import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './ex1_2/ex1.component';
import { FormsModule } from '@angular/forms';
import { RainbowTextDirective } from './ex1_2/rainbow-text.directive';
import { CvComponent } from './exCv/cv/cv.component';
import { DetailCvComponent } from './exCv/detail-cv/detail-cv.component';
import { ItemCvComponent } from './exCv/item-cv/item-cv.component';
import { ListCvComponent } from './exCv/list-cv/list-cv.component';
import { ListeEmbauchesComponent } from './exCv/liste-embauches/liste-embauches.component';
import { DefaultImagePipe } from './exCv/pipes/default-image.pipe';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { ROUTING } from './app.routing';
import { PageDetailComponent } from './exCv/page-detail/page-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    RainbowTextDirective,
    CvComponent,
    DetailCvComponent,
    ItemCvComponent,
    ListCvComponent,
    ListeEmbauchesComponent,
    DefaultImagePipe,
    NavbarComponent,
    PageDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

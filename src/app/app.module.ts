import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './ex1_2/ex1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RainbowTextDirective } from './ex1_2/rainbow-text.directive';
import { CvComponent } from './exCv/cv/cv.component';
import { DetailCvComponent } from './exCv/detail-cv/detail-cv.component';
import { ItemCvComponent } from './exCv/item-cv/item-cv.component';
import { ListCvComponent } from './exCv/list-cv/list-cv.component';
import { ListeEmbauchesComponent } from './exCv/liste-embauches/liste-embauches.component';
import { DefaultImagePipe } from './exCv/pipes/default-image.pipe';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ROUTING } from './app.routing';
import { PageDetailComponent } from './exCv/page-detail/page-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { StyleComponent } from './directives/style/style.component';
import { ClassComponent } from './directives/class/class.component';

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
    LoginComponent,
    HomeComponent,
    StyleComponent,
    ClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ROUTING,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

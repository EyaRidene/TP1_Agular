import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  constructor(private cvService: CvService, private router: Router) {}
  addCv(formulaire: NgForm) {
    //console.log(formulaire);
    this.cvService.addCv(formulaire.value);
    this.router.navigate(['cv']);
  }
}

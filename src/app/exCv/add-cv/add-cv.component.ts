import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  errorMessage = '';
  constructor(private cvService: CvService, private router: Router) {}
  /*
    addCv(formulaire: NgForm) {
    //console.log(formulaire);
    this.cvService.addCv(formulaire.value);
    this.router.navigate(['cv']);
  }
  */

  addCv(cv: Cv) {
    this.cvService.addCv(cv).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = `Problème de connexion à votre serveur. Prière de consulter l'adminsitrateur`;
        console.log(error);
      }
    );
  }
}

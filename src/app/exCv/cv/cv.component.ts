import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne.model';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  nb = 0;
  cvs: Cv[] = [];

  constructor(
    public cvService: CvService,
    public embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {}
  selectedCv: Cv | null = null;

  ngOnInit(): void {
    this.cvService.getPersonnesFromApi().subscribe(
      (personnes) => {
        this.cvs = personnes;
      },
      (error) => {
        console.log(error);
        this.toastr.error('Le fetch api a échoué');
        this.cvs = this.cvService.getCvs();
      }
    );
  }

  showDetails(id: number) {
    this.selectedCv = this.cvService.getCvById(id) || null;
  }
}

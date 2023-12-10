import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { PremierService } from 'src/app/services/premier.service';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;

  constructor(
    private premierService: PremierService,
    private cvService: CvService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvService.getPersonnesFromApi().subscribe(
      (personnes) => {
        this.cvs = personnes;
      },
      (error) => {
        this.toastr.error('Le fetch api a échoué');
        this.cvs = this.cvService.getCvs();
      }
    );
    // this.premierService.addData('data from cv component');
    // this.premierService.logger(this.cvs);
  }

  selectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { PremierService } from 'src/app/services/premier.service';
import { CvService } from '../services/cv.service';

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
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
    // this.premierService.addData('data from cv component');
    // this.premierService.logger(this.cvs);
  }

  selectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}

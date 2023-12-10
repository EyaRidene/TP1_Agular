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

  juniorCvs: Cv[] = [];
  seniorCvs: Cv[] = [];

  seniorsActive = true;
  juniorsActive = false;
  content: Cv[] = [];

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

    // @ts-ignore

    // @ts-ignore
    this.juniorCvs = this.cvs.filter((cv) => cv.age && cv.age < 40);
    // @ts-ignore
    this.seniorCvs = this.cvs.filter((cv) => cv.age && cv.age >= 40);
    this.content = this.seniorCvs;
  }

  selectCv(cv: Cv) {
    this.selectedCv = cv;
  }

  showJuniors() {
    this.content = this.juniorCvs;
    console.log(this.content);
    this.juniorsActive = true;
    this.seniorsActive = false;
  }
  showSeniors() {
    this.content = this.seniorCvs;
    this.juniorsActive = false;
    this.seniorsActive = true;
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { PremierService } from 'src/app/services/premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;

  constructor(private premierService: PremierService) {}

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'eya', 'ridene', 'eya.jpg', 'Software engineering Student'),
      new Cv(2, 'mariem', 'ksontini', 'mariem.jpg', 'Model'),
      new Cv(3, 'sandra', 'mourali', 'sandra.jpg', 'Data Scientist'),
      new Cv(4, 'hani', 'hadded', 'hani.jpg', 'Developper'),
      new Cv(4, 'mahmoud', 'nefzi', '', 'programmmer'),
    ];
    this.premierService.addData('data from cv component');
    this.premierService.logger(this.cvs);
  }

  selectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'eya', 'ridene', 'eya.jpg', 'Software engineering Student'),
      new Cv(2, 'mariem', 'ksontini', 'mariem.jpg', 'Model'),
      new Cv(3, 'sandra', 'mourali', 'sandra.jpg', 'Data Scientist'),
      new Cv(4, 'hani', 'hadded', 'hani.jpg', 'Developper'),
      new Cv(4, 'mahmoud', 'nefzi', '', 'programmmer'),
    ];
  }

  selectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}

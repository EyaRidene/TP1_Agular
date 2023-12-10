import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({ providedIn: 'root' })
export class CvService {
  cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'eya', 'ridene', 'eya.jpg', 'Software engineering Student'),
      new Cv(2, 'mariem', 'ksontini', 'mariem.jpg', 'Model'),
      new Cv(3, 'sandra', 'mourali', 'sandra.jpg', 'Data Scientist'),
      new Cv(4, 'hani', 'hadded', 'hani.jpg', 'Developper'),
      new Cv(5, 'mahmoud', 'nefzi', '', 'programmmer'),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv | undefined {
    return this.cvs.find((cv) => cv.id == id);
  }

  addCv(cv: Cv): void {
    cv.id = this.cvs.length;
    this.cvs.push(cv);
  }
}

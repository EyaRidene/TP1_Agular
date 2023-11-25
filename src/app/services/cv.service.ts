import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [
    new Cv(1, 'Ridene', 'Eya', 'eya.jpg', 'Student'),
    new Cv(2, 'Ksontini', 'Mariem', 'mariem.jpg', 'Model'),
    new Cv(3, 'Mourali', 'Sandra', 'sandra.jpg', '3arafa'),
    new Cv(4, 'Hadded', 'Hani', 'hani.jpg', 'Doctor'),
    new Cv(5, 'Nefzi', 'Mahmoud', '', 'programmer'),
  ];

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number) {
    return this.cvs.find((cv) => cv.id === id);
  }

  deleteCv(id: number): void {
    const index = this.cvs.findIndex((cv) => cv.id === id);
    if (index !== -1) {
      this.cvs.splice(index, 1);
    }
  }
}

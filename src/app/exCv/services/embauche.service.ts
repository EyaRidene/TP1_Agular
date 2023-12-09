import { Injectable, inject } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  cvs: Cv[] = [];
  constructor() {
    this.cvs = [];
  }

  getEmbauchees() {
    return this.cvs;
  }
  embaucher(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index < 0) {
      this.cvs.push(cv);
    } else {
      alert(`la personne : ${cv.firstname} ${cv.name} est déja embauchée ! `);
    }
  }
  debaucher(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index < 0) {
      this.cvs.splice(index, 1);
    } else {
      alert(`la personne : ${cv.firstname} ${cv.name} n'est pas embauchée !`);
    }
  }
}

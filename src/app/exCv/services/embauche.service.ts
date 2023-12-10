import { Injectable } from '@angular/core';
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

  embaucher(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index < 0) {
      this.cvs.push(cv);
      return true; // Successfully hired
    } else {
      return false; // Already hired
    }
  }

  debaucher(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
      return true; // Successfully fired
    } else {
      return false; // Not hired
    }
  }
}

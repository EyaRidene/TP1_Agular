import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauches: Cv[] = [];

  constructor(private toastr: ToastrService) {}

  getEmbauches(): Cv[] {
    return this.embauches;
  }

  getCvById(id: number) {
    return this.embauches.find((cv) => cv.id === id);
  }

  embaucher(cv: Cv): void {
    if (this.embauches.find((e) => e.id === cv.id)) {
      this.toastr.warning('Person is already hired!', 'Warning');
    } else {
      this.embauches.push(cv);
      this.toastr.success('Person successfully hired!', 'Success');
    }
  }

  deleteEmbauche(id: number): void {
    const index = this.embauches.findIndex((cv) => cv.id === id);
    if (index !== -1) {
      this.embauches.splice(index, 1);
    }
  }
}

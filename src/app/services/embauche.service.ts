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

  embaucher(cv: Cv): void {
    if (this.embauches.find((e) => e.id === cv.id)) {
      this.toastr.warning('Person is already hired!', 'Warning');
    } else {
      this.embauches.push(cv);
      this.toastr.success('Person successfully hired!', 'Success');
    }
  }
}

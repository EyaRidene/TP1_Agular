import { Injectable, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  cvsEmbauche: Cv[] = [];

  toast = inject(ToastrService);

  getEmbauches$ = new BehaviorSubject<Cv[]>([]);
  embauches$: Observable<Cv[]>;

  constructor() {
    this.embauches$ = this.getEmbauches$.asObservable();
  }

  embaucher(cv: Cv) {
    var embauches = this.getEmbauches$.value;
    if (embauches.findIndex((c) => c.id == cv.id) == -1) {
      embauches = [...embauches, cv];
      this.getEmbauches$.next(embauches);

      this.toast.success(`Le candidat ${cv.firstname} ${cv.name} a été ajouté`);
    } else {
      this.toast.warning(
        `Le candidat ${cv.firstname} ${cv.name} est déja embauché`
      );
    }
  }

  getAllEmbauches() {
    return this.getEmbauches$.value;
  }

  deleteCv(id: number) {
    var embauches = this.getEmbauches$.value;
    const index = embauches.findIndex((cv) => cv.id == id);
    if (index !== -1) embauches.splice(index, 1);
  }
}

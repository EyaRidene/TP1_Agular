import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  @Input() cv: Cv | null = null;

  constructor(
    private embaucheService: EmbaucheService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  embaucher() {
    if (this.cv) {
      const embaucheSuccess = this.embaucheService.embaucher(this.cv);
      if (embaucheSuccess) {
        this.toastr.success('Personne embauchée avec succès', 'Succès');
      } else {
        this.toastr.error('Ce cv est déjà sélectionné', 'Erreur');
      }
    }
  }

  navigateToDetails() {
    this.router.navigate(['cv', this.cv?.id]);
  }
}

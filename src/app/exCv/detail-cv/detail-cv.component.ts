import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  constructor(
    private router: Router,
    private cvService: CvService,
    private embaucheService: EmbaucheService
  ) {}

  @Input() cv: Cv | null = null;
  @Output()
  addEmploye = new EventEmitter<number>();

  addembauche(id: number) {
    let cv = this.cvService.getCvById(id);
    if (cv) {
      this.embaucheService.embaucher(cv);
    }
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/cv', id]);
  }
}

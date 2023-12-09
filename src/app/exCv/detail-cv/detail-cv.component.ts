import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  @Input() cv: Cv | null = null;

  constructor(private embaucheService: EmbaucheService) {}

  embaucher() {
    if (this.cv) {
      this.embaucheService.embaucher(this.cv);
    }
  }
}

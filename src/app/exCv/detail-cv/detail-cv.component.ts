import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  @Input() cv: Cv | null = null;
}

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
})
export class ItemCvComponent {
  @Input() cv: Cv | null = null;
  @Output() selectedCv = new EventEmitter<Cv>();
  selectCv() {
    if (this.cv) {
      this.selectedCv.emit(this.cv);
    }
  }
}

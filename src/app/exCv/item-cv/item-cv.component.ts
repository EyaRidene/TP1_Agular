import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
})
export class ItemCvComponent {
  @Input() cv: Cv | null = null;
  @Output()
  selectCv = new EventEmitter<number>();
  onSelectCv() {
    this.selectCv.emit(this.cv?.id);
  }
}

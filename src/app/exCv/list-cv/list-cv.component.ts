import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from '../../model/cv.model';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css'],
})
export class ListCvComponent {
  @Input() cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<number>();
  cvSelected(id: number) {
    this.forwardCv.emit(id);
  }
}

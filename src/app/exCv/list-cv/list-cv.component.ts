import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from '../model/cv.model';

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

/*import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() cvs: Cv[] = [];
  isHidden = true;
  /*   @Output()
  forwardCv = new EventEmitter(); */
/*constructor() {}
  showHide() {
    this.isHidden = !this.isHidden;
  }
} */

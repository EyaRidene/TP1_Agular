import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  est = false;
  milan = false;
  real = true;

  changeTeam() {
    this.est = true;
    this.real = false;
    this.milan = false;
  }
}

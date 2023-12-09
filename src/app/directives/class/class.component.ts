import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  teams = ['est', 'real madrid', 'milan', 'barca'];
  est = false;
  milan = false;
  real = true;
  show = true;

  changeTeam() {
    this.est = true;
    this.real = false;
    this.milan = false;
  }
}

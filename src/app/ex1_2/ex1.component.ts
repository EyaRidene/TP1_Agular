import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1_2',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css'],
})
export class Ex1Component {
  color = 'red';
  size = '25';
  fontFamily = 'arial';
  constructor() {}

  ngOnInit() {}
}

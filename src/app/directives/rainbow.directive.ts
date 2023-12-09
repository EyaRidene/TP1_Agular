import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  constructor() {}
  tableau = [
    'blue',
    'lightyellow',
    'lightgreen',
    'grey',
    'purple',
    'lightblue',
    'coral',
    'pink',
    'green',
    'gold',
  ];

  @HostBinding('style.borderColor') bc = 'black';
  @HostBinding('style.color') color = 'black';
  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.tableau.length - 1));
    this.bc = this.tableau[index];
    this.color = this.tableau[index];
  }
}

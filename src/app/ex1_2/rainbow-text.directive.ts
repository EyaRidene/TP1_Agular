import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowText]',
})
export class RainbowTextDirective {
  private rainbowColors: string[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.borderColor') bordercolor: string;
  constructor() {
    this.color = 'red';
    this.bordercolor = 'black';
  }
  @HostListener('keyup') onKeyup() {
    this.changeColors();
  }

  private changeColors() {
    const randomIndex = Math.floor(Math.random() * this.rainbowColors.length);
    this.color = this.rainbowColors[randomIndex];
    this.bordercolor = this.rainbowColors[randomIndex];
  }
}

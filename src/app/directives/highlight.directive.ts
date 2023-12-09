import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // j'ai besoin d'un HostBinding : quelle est la propriété je vais gérer et un HostListener : quand est ce que la directive sera exécuter
  constructor() {}
  @HostBinding('style.background-color') bg = 'red';
  @HostListener('mouseenter') mouseenter() {
    this.bg = 'yellow';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = 'lightBlue';
  }
}

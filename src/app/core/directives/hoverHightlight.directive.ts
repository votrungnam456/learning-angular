import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'inherit';
  }
  constructor() {
    this.backgroundColor = 'inherit';
  }
}

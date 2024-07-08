import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input('hoverHighlight') isActive: boolean | undefined;

  // private _isActive: boolean = false;
  // @Input('appHighlightOnHover')
  // set isActive(value: boolean) {
  //   this._isActive = value !== undefined ? value : true;
  // }

  // get isActive(): boolean {
  //   return this._isActive;
  // }
  @HostListener('mouseenter') onMouseEnter() {
    if (this.isActive) {
      this.backgroundColor = 'yellow';
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (this.isActive) {
      this.backgroundColor = '';
    }
  }
  constructor() {
    this.backgroundColor = '';
    this.isActive = false;
  }
}

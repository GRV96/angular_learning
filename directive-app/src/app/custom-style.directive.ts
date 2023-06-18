import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customStyle]'
})
export class CustomStyleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontSize = '24px';
  }
}

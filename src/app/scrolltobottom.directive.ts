import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrolltobottom]'
})
export class ScrolltobottomDirective {

  constructor(el: ElementRef) {

  }

}

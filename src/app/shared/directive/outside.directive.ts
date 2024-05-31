import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

@Output() clickOutside = new EventEmitter<Event>();

  constructor(private elementRef: ElementRef) {}

}

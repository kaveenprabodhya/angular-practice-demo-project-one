import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  // @Input('format') format: any;
  @Input('appInputFormat') format: any;
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    if (this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
  }
}

import { Directive, ElementRef ,HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appShadow]',
  standalone: true
})
export class ShadowDirective implements OnChanges{

  @Input('appShadow') bgColor: string='red';

  constructor(private element: ElementRef) { }
ngOnChanges(changes: SimpleChanges): void {
  
}
  @HostListener('mouseenter') over() {
    this.element.nativeElement.style.backgroundColor = this.bgColor;
    this.element.nativeElement.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
    this.element.nativeElement.style.transition = 'box-shadow 0.3s ease';
  
      
    
  }

  @HostListener('mouseleave') Leave() {
    this.element.nativeElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    this.element.nativeElement.style.transition = 'box-shadow 0.0s ease';
  
      this.element.nativeElement.style.backgroundColor = 'initial';
    
  
}
}
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  @Input('pokemonBorderCard') borderColor: string;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  setHeight(height: number): void{
    this.el.nativeElement.style.height = `${height} px`;
  }

  setBorder(color: string): void{
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}

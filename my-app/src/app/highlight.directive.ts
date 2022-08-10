import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef:ElementRef) { 
    eleRef.nativeElement.style.backgroundColor='blue';
    eleRef.nativeElement.style.color='white';
  }


  @HostListener("mouseenter")
  onMouseEnter(){
    this.eleRef.nativeElement.style.background='yellow';
    this.eleRef.nativeElement.style.color='red';
    
  }

  @HostListener("mouseleave")
  onMouseLeft(){
    this.eleRef.nativeElement.style.background='brown';
    this.eleRef.nativeElement.style.color='green'; 
  }
  
}

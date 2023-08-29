import { Directive,  ElementRef, Input} from '@angular/core';


@Directive({
  selector: '[appFirst]'
})

export class FirstDirective {

  constructor(private elementg: ElementRef) {
    console.log("First Directive");
    this.elementg.nativeElement.style.backgroundColor = 'blue';
   }




   @Input() set backgroundColor(color:string){
    this.elementg.nativeElement.style.backgroundColor=color;
   }
}

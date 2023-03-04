import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective implements OnDestroy {
  
  @Input() set customIf(condicion: boolean){
    if(condicion){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainer.clear();
    }
  }

  //Si escribo algo en la caja y se ejecuta esta directiva sale Error
  //Al momento de llamar al customIf se debe hacer con un *  o sea  *customIf
  constructor(
    private templateRef:TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) { 
    console.log('constructor custom If');
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    //console.log('On Destroy');

  }

}

import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges  {

  htmlElement: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _mensaje: string = 'Texto por defecto';

  @Input() set color(valor: string){     //<== con esto se soluciona el problema de que no haya deteccion de cambios en la directiva
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor: string){   //<== con esta forma de hacer elk Input() ya no hace falta usar el ngOnChanges que tambien funcionaba bien pero esta solucion es mejor
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden'); //Este hiden es una clase personalizada que la declaro en el styles.css
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
    
  }

  
  
  constructor(private el: ElementRef<HTMLElement>) { //puede ser tambien  <any>
    //console.log('constructor directive');
    this.htmlElement = el;
  }

  ngOnInit(): void {
    //console.log('ngOnInit directive');

    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
    // if(changes['mensaje']){
    //   console.log(changes['mensaje'].currentValue);
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    
    // if(changes['color']){
    //   console.log(changes['color'].currentValue);
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}

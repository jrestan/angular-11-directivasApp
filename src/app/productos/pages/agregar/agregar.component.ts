import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  color: string = 'red';
  texto1: string = 'Javier Restan';
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError(campo: string): boolean{

    //return this.miFormulario.get(campo)!.valid; //<=esta es otra forma asumiendo que siempre va a devolver un valor...

    return this.miFormulario.get(campo)?.invalid || false;
  }

  guardar(): void {
    this.texto1 = 'Ludwing Javier Restan Zegarra';

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color = color;
  }

}

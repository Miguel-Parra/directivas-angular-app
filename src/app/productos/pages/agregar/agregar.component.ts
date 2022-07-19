import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  color: string = 'blue';
  texto: string = 'Miguel llena el campo';

  miFormulario: FormGroup = this._fB.group({
    'nombre': ['', [Validators.required]]
  })

  constructor(private _fB: FormBuilder) { }

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false; // si es null entonces retorna false
  }

  cambiarTexto() {
    if (this.texto === 'Miguel llena el campo') {
      this.texto = 'Pame llena el campo';
    } else {
      this.texto = 'Miguel llena el campo';
    }
  }

  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }
}

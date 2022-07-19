import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private color: string = 'red';
  private mensaje: string = 'Debe ingresar este campo';

  @Input('color') set colorPadre(valor: string) {
    this.color = valor;
    this.setColor();
  };
  
  @Input('mensaje') set mensajePadre(valor: string) {
    this.mensaje = valor;
   this.setMensaje();
  };

  @Input('valido') set validoPadre(valor: boolean) {
    if(valor){
      this._htmlElement.nativeElement.classList.remove('hidden');
    }else {
      this._htmlElement.nativeElement.classList.add('hidden');
    }

  };

  constructor(private _htmlElement: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClass();
  }
  setColor(): void {
    this._htmlElement.nativeElement.style.color = this.color;
  }

  setClass(): void {
    this._htmlElement.nativeElement.classList.add('form-text')
  }

  setMensaje(): void {
    this._htmlElement.nativeElement.innerText = this.mensaje;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this._htmlElement.nativeElement.innerText = mensaje;
    // }
    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this._htmlElement.nativeElement.style.color = color;
    // }
  }

}

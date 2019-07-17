import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularPromedioService {

  constructor() { }


  calcularPromedio( nota1:number, nota2:number, nota3:number, nota4:number ){
    return (nota1 + nota2 + nota3 + nota4)/4;
  }

}

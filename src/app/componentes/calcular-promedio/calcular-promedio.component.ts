import { Component, OnInit } from '@angular/core';
import { CalcularPromedioService } from 'src/app/servicios/calcular-promedio.service';

@Component({
  selector: 'app-calcular-promedio',
  templateUrl: './calcular-promedio.component.html',
  styleUrls: ['./calcular-promedio.component.css']
})
export class CalcularPromedioComponent implements OnInit {

  nota1:number;
  nota2:number;
  nota3:number;
  nota4:number;
  promedio:number;

  show:boolean = true;


  cursos:string[] = [
    "Microservicios", 
    "Desarrollo Web", 
    "Machine Learning"];

  constructor(private servicio:CalcularPromedioService) { }

  ngOnInit() {
  }


  calcularPromedio(){
    this.promedio = this.servicio.calcularPromedio(this.nota1 , 
      this.nota2 , 
      this.nota3 , 
      this.nota4);
  }

}

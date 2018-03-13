import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;

  listaEstudiantes: Estudiante[];

  constructor() { }

  ngOnInit() {
    console.log( 'Inicializando el componente MaterialList' )
    this.estudiante1 = new ClassEstudiante( 1, 'Alex Andrei', 'Jalisco');

    this.estudiante2 = {
      id: 2,
      nombre: 'Adolfo Bastida',
      ciudad: 'Ciudad de México'
    };

    this.listaEstudiantes = [
      this.estudiante1,
      this.estudiante2
    ];

    setTimeout(() => {
      this.estudiante2 = {
        id: 3,
        nombre: 'Andrea Patricia',
        ciudad: 'Jalisco'
      }
    }, 3000)
  }

  onMouseClick( $event: Estudiante ) {
    console.log( 'Click on ', $event.nombre );
  }

}

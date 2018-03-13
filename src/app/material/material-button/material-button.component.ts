import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {

  formulario = {
    valido: false
  };

  constructor() { }

  ngOnInit() {
  }

  onClick( $event ) {
    console.log( 'click presionado', $event );
  }

}

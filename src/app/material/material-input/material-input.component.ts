import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKeyUp( $event ) {
    console.log( $event );
  }

  onBlur( $event, FocusEvent) {
    console.log( $event);
  }
}

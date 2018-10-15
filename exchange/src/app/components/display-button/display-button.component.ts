import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-display-button',
	templateUrl: './display-button.component.html',
	styleUrls: ['./display-button.component.css']
})
export class DisplayButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buttonText = "display";
  @Output() clickEvent = new EventEmitter<string>();

  updateRates()
  {
	 this.clickEvent.emit("");
  }
}

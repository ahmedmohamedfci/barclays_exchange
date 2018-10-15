import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

	selectCurrnecy = "Base: ";
	mainCurrencies = ['EUR','USD','GBP','AUD','CAD','JPY'];
	selectedCurrency = "EUR";
	constructor() { }

	ngOnInit() {
	}

}

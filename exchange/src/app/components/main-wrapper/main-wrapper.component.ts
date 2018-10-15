import { Component, OnInit, ViewChild, AfterContentInit   } from '@angular/core';
import { DropDownComponent } from "../drop-down/drop-down.component";
import { DateSelectorComponent } from "../date-selector/date-selector.component";
import { ExchangeTableComponent } from "../exchange-table/exchange-table.component";
import { CommunicatorService } from '../../services/communicator.service';



@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {

	private date : string;
	private currency :string
  constructor(private com:CommunicatorService) { 
	
  }
  @ViewChild(DropDownComponent) __currency;
  @ViewChild(DateSelectorComponent) __date;
  @ViewChild(ExchangeTableComponent) __exchangeTable;
  
  
  updateValues($event)
  {
	this.date = this.__date.dateValue;
	this.currency = this.__currency.selectedCurrency;
	
	this.__exchangeTable.base = this.currency;
	this.__exchangeTable.date = this.date;
	let rates = this.com.getData(this.date,this.currency);
	rates.subscribe((data:any) => {
		
		this.__exchangeTable.rates = Object.entries(data.rates);

	});
	
  }
  
  
  ngAfterContentInit() {
    this.updateValues("");
	this.__exchangeTable.baseCurrencies = this.__currency.mainCurrencies;
  }
  
  
  
  ngOnInit() {
  }

}

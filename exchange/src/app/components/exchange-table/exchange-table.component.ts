import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-table',
  templateUrl: './exchange-table.component.html',
  styleUrls: ['./exchange-table.component.css']
})
export class ExchangeTableComponent implements OnInit {

	sorted = 1;
	
	public baseCurrencies : [string];
	constructor() { }

	ngOnInit() {
	}
	
	reverseSorted(){this.sorted = -1*this.sorted;}
	
	sortedValuesArray(arr)
	{
		if(arr === undefined)
		{
			
			return [];
		}
		return arr.sort((a,b)=>{ 
		if(a[0].toUpperCase()>b[0].toUpperCase())
		{
			return 1*this.sorted;
		}
		else		
		{
			return -1*this.sorted;
		}
		
		});
	}
	
	formatRate(value,percentage)
	{
		return (value + (value*percentage)).toFixed(4);
	}
	
	isInBase(curruncy)
	{
		
		return this.baseCurrencies.indexOf(curruncy) > -1;
	}
	
	update(updateValues){
		alert("I am here.."+updateValues);    
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	dateText = "Date: ";
	dateValue = "2018-04-27";
	
	getMaxDate()
	{	
		let today = new Date();
		let dd = today.getDate().toString();
		let mm = (today.getMonth()+1).toString();
		let yyyy = today.getFullYear().toString();
		if(dd.length < 2){
			dd='0'+dd
		} 
		if(mm.length < 2){
			mm='0'+mm
		} 
		return yyyy+"-"+mm+"-"+dd;
	}
	
  }


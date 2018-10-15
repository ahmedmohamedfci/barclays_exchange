import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

	constructor(public http: HttpClient){ }
	
	public getData(date,base)
	{
		
		let baseUrl = "https://api.exchangeratesapi.io/";
		return this.http.get(baseUrl+date+"?base="+base);
	}
  
}

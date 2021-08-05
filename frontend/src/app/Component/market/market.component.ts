import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface cryptoElement {
  id:"string"
  image:"string"
  symbol:"string"
  current_price:"string"
  market_cap:"string"
  total_supply:"string"
  max_supply:"string"
  price_change_percentage_24h:"string",
  total_volume:"string"
}

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {


  constructor(private http:HttpClient) { }
  page = 1;
  pageSize =10;
  items = [];
  filterTerm:string;
  selectedCurrency:string = "INR";
  ngOnInit(): void {
    this.getAlldata();
    // console.log(this.array)
  }
  cryto:cryptoElement[]=[
  ]
  url:string = "https://api.coingecko.com/api/v3/coins/markets?vs_currency="+this.selectedCurrency+"&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  method_name(){
     console.log(this.selectedCurrency);
     this.url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency="+this.selectedCurrency+"&order=market_cap_desc&per_page=100&page=1&sparkline=false"
     console.log(this.url)
     this.getAlldata();
  }

  getAlldata(){
    return this.http.get<cryptoElement>(this.url)
    .subscribe((data:any)=>{
      this.cryto = data;
      console.log(data);
    })
  }

}

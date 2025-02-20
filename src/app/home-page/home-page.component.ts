import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  public myDate = new Date();
  public openingHours: any = {};  
  public haircutPrices: any[] = []; 
 public weekDays: string[] = [ 
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  constructor(private master: MasterService) {}

  ngOnInit() {
    this.master.getOpeningHours().subscribe(data => this.openingHours = data);
    this.master.getHaircutPrices().subscribe(data => this.haircutPrices = data);
  }
  
}

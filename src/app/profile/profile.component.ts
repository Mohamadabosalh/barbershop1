import { Component } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

    showForm: string | null = null;
    weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    openingHours: any = {};
    haircutTypes: any[] = [];
    haircutPrices: any[] = [];
    newHaircutType: string = "";
  
    constructor(private masterService: MasterService) {}
  
    ngOnInit() {
      this.masterService.getOpeningHours().subscribe(data => this.openingHours = data);
      this.masterService.getHaircutTypes().subscribe(data => this.haircutTypes = data);
      this.masterService.getHaircutPrices().subscribe(data => this.haircutPrices = data);
    }
  
    toggleForm(type: string) {
      this.showForm = this.showForm === type ? null : type;
    }
  
    saveOpeningHours() {
      this.masterService.updateOpeningHours(this.openingHours).subscribe(() => {
        alert('Opening hours updated successfully');
      });
    }

    saveHaircutTypes() {
      this.masterService.updateHaircutTypes(this.haircutTypes).subscribe(() => {
        alert('Haircut types updated successfully');
      });
    }

    saveHaircutPrices() {
      this.haircutPrices.forEach(haircut => {
        this.masterService.updateHaircutPrice(haircut.id, haircut.type, haircut.price)
        .subscribe(
          response => console.log("hair cut price will update ID " + haircut.id, response),
          error => console.error("Error ID " + haircut.id + ":", error)
        );
      });
    }

    addNewHaircutType() {
      this.masterService.addHaircutType(this.newHaircutType).subscribe(response => {
        this.haircutTypes.push(response);
        alert("Haircut type added successfully!");
        this.newHaircutType = ""; 
        this.masterService.getHaircutPrices().subscribe(data => this.haircutPrices = data);
      });
    }
  
    deleteHaircutPrice(id: string) {
      if (confirm('Confirm')) { 
        this.masterService.deleteHaircutPrice(id).subscribe(() => {
          this.haircutPrices = this.haircutPrices.filter(haircut => haircut.id !== id);
        }, error => {
          console.error('Error:', error);
        });
    }
  }

}

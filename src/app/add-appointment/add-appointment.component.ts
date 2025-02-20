import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  standalone: false,
  
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {
  public myDate = new Date();
  constructor(private appointmentService: MasterService, private router: Router) {}
  haircutPrices: any[] = [];
 
appointments: any[] = [];
newAppointment = { name: ' ' ,time: ' ', date: ' ',haircutTypes: ' ' };
ngOnInit(): void {
  this.fetchUsers10();
  this.loadhaircutprice()
}
fetchUsers10(): void {
  this.appointmentService.getAppointments().subscribe((data) => {
    this.appointments = data;
  });
}
addAppointment(): void {
  this.appointmentService.addAppointment(this.newAppointment).subscribe((appointment) => {
    this.appointments.push(appointment);
    this.newAppointment = {  name: ' ' ,time: '', date: '' ,haircutTypes: '' };
  });
}

loadhaircutprice(){
  this.appointmentService.getHaircutPrices().subscribe((data) => {
    this.haircutPrices = data;
  });
}

}

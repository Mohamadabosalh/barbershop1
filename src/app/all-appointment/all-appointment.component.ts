import { Component } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-all-appointment',
  standalone: false,
  
  templateUrl: './all-appointment.component.html',
  styleUrl: './all-appointment.component.css'
})
export class AllAppointmentComponent {
  public myDate = new Date();
appointments: any[] = [];
newAppointment = { name: ' ' ,time: ' ', date: ' ',haircutTypes:' ' };
constructor(private master: MasterService) {}

ngOnInit(): void {
  this.fetchUsers10();
}
fetchUsers10(): void {
  this.master.getAppointments().subscribe((data) => {
    this.appointments = data;
  });
}
deleteAppointment(id: number): void {
  this.master.deleteAppointment(id).subscribe(() => {
    this.appointments = this.appointments.filter(appointment => appointment.id !== id);  
  });
  alert('Appointment deleted successfully');
}
}

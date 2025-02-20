import { Component,OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-todays-appointments',
  standalone: false,
  
  templateUrl: './todays-appointments.component.html',
  styleUrl: './todays-appointments.component.css'
})
export class TodaysAppointmentsComponent {
  public myDate = new Date();
  appointments: any[] = [];
  public todaysAppointments: any[] = []; 

  constructor(private master:MasterService) {}

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0]; 

    this.master.getAppointments().subscribe((appointments) => {
      this.todaysAppointments = appointments.filter(
        (appointment) => appointment.date === today
      );
    });
  }

  deleteAppointment(id: number): void {
    this.master.deleteAppointment(id).subscribe(() => {
      this.appointments = this.appointments.filter(appointment => appointment.id !== id);  
    });
    alert('Appointment deleted successfully');
  }

}

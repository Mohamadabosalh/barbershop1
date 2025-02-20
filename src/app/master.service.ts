import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface OpeningHours {
  [key: string]: string;
}
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private appointment: { date: string, time: string } | null = null;

  setAppointment(date: string, time: string) {
    this.appointment = { date, time };
  }

  getAppointment() {
    return this.appointment;
  }

  private apiUrl = 'http://localhost:3000/users';
  private apiUrl1 = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
   getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  addAppointment(appointment: { date: string; time: string }): Observable<any> {
    const apiUrl = 'http://localhost:3000/appointments';
    return this.http.post(apiUrl, appointment);
  }
  
  getAppointments(): Observable<any[]> {
    const apiUrl = 'http://localhost:3000/appointments';
    return this.http.get<any[]>(apiUrl);
  }

  loginUser(user: { email: string, password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users', user);
  }
  
  getOpeningHours(): Observable<any> {
    return this.http.get(this.apiUrl1 + "/openingHours");

  }

  updateOpeningHours(hours: any): Observable<any> {
    return this.http.put(`${this.apiUrl1}/openingHours`, hours);
  }

  getHaircutTypes(): Observable<any> {
    return this.http.get(this.apiUrl + "/haircutTypes");
  }

  updateHaircutTypes(types: any[]): Observable<any> {
    return this.http.put(this.apiUrl1+"/haircutTypes", types);
  }

  deleteAppointment(id: number): Observable<any> {
    const apiUrl = 'http://localhost:3000/appointments/' + id;
    return this.http.delete(apiUrl);
  }

  getHaircutPrices(): Observable<any> {
    return this.http.get(this.apiUrl1+"/haircutPrices");
  }

  updateHaircutPrice(id: number, type: string, price: number): Observable<any> {
    return this.http.put('http://localhost:3000/haircutPrices/' + id, { id, type, price });
  }

  addHaircutType(type: string): Observable<any> {
    return this.http.post(this.apiUrl1 + "/haircutPrices", { type });
  }
  
  deleteHaircutPrice(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/haircutPrices/' + id);
  }

  

}

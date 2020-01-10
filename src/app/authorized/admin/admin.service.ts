import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as configData } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }
  isAdminUrl = configData.host + 'users/is_admin/';
  getReservationsUrl = configData.host + 'reservations/all_reservations/'
  seasonUrl = configData.host + 'seasons/get_season/';
  isAdmin = () => this.http.post(this.isAdminUrl, {}, {observe: 'response'});
  getReservations: any = () => this.http.get(this.getReservationsUrl, {observe: 'response'});
  getSeason: any = () => this.http.get(this.seasonUrl, {observe: 'response'});

}

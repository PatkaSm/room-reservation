import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as configData } from 'src/app/config';

@Injectable()
export class ReservationService {
    url = configData.host + 'rooms/show_available_rooms/';
    addUrl = configData.host + 'reservations/create/';

    constructor(private http: HttpClient) { }
    getRooms: any = (data: any) => this.http.post(this.url, data, {observe: 'response'});
    makeReservation: any = (data: any) => this.http.post(this.addUrl, data, {observe: 'response'});

}
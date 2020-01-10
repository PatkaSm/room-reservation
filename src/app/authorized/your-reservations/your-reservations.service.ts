import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as configData } from 'src/app/config';

@Injectable()
export class YourReservationsService {
    url = configData.host + 'reservations/my_reservations/';
    constructor(private http: HttpClient) { }
    getDetails: any = () => this.http.get(this.url, { observe: 'response' });
    deleteReservation: any = (id) => {
        const deleteUrl = configData.host + `reservations/reservation/${id}/delete/`;
        return this.http.delete(deleteUrl, { observe: 'response' });
    }
}

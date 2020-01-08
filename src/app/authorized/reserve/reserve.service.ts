import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as configData } from 'src/app/config';

@Injectable()
export class ReserveService {
    url = configData.host + 'rooms/show_available_rooms/';
    constructor(private http: HttpClient) { }
    getRooms: any = (data: any) => this.http.post(this.url, data, {observe: 'response'});
}
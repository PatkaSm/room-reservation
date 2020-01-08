import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import url from 'src/app/config';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = url.host + 'user/details/';
  constructor(private http: HttpClient) { }
  getDetails = () => this.http.post(this.url, {}, {observe: 'response'});
}

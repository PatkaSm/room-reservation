import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import url from 'src/app/config';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = url.host + 'user/details/';
  editUrl = url.host + 'user/update_profile/';
  constructor(private http: HttpClient) { }
  getDetails = () => this.http.post(this.url, {}, {observe: 'response'});
  sendUserData: any = (data) => this.http.put(this.editUrl, data, {observe: 'response'});
}

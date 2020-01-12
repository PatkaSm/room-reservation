import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import url from 'src/app/config';
import { LoginService } from 'src/app/login/login.service';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  authKey;
  url = url.host + 'user/details/';
  editUrl = url.host + 'user/update_profile/';
  constructor(private http: HttpClient, private loginService: LoginService) { }
  getDetails = () => this.http.post(this.url, {}, {observe: 'response'});
  sendUserData: any = (data) => this.http.put(this.editUrl, data, {observe: 'response'});
  getPdf(date) {

    this.authKey = localStorage.getItem('Token');
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Authorization': 'Token ' + this.authKey,
      })
    };
  
    return this.http.get(`${url.host}logs/get/?date=${date}&auth=${this.authKey}`, httpOptions);
  }
}

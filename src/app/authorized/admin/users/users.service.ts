import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as configData } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsersUrl = configData.host + 'users/get_users/';
  getUsers: any = () => this.http.post(this.getUsersUrl, {}, {observe: 'response'});


}

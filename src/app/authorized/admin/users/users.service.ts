import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as configData } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsersUrl = configData.host + 'users/get_users/';
  setAdminUrl = configData.host + 'users/set_admin/';
  getUsers: any = () => this.http.post(this.getUsersUrl, {}, { observe: 'response' });
  deleteUser: any = (id: number) => {
    const url = configData.host + `users/${id}/delete/`;
    return this.http.post(url,{}, { observe: 'response' });
  }
  setAdmin: any = (id: number) => this.http.post(this.setAdminUrl, {id: id}, { observe: 'response' });


}

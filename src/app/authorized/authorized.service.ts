import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as configData } from 'src/app/config';

@Injectable()
export class AuthorizedService {
    url = configData.host + 'user/details/';
    constructor(private http: HttpClient) { }
    getName: any = () => this.http.post(this.url, {}, {observe: 'response'});
}
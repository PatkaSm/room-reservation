import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import url from 'src/app/config';
@Injectable({
  providedIn: 'root'
})
export class NewSeasonService {
  url = url.host + 'season/new/';
  constructor(private http: HttpClient) { }
  newSeason = (data: any) => this.http.post(this.url, data, {observe: 'response'});
}

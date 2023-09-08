import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comic } from '../Store/Model/Comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  baseurl = 'http://localhost:3000/comic';
  constructor(private http: HttpClient) {

  }

  GetAll() {
    return this.http.get<Comic[]>(this.baseurl);
  }

  Getbycode(code: number) {
    return this.http.get<Comic>(this.baseurl + '/' + code);
  }
  Delete(code: number) {
    return this.http.delete(this.baseurl + '/' + code);
  }
  Update(data: Comic) {
    return this.http.put(this.baseurl + '/' + data.id, data);
  }
  Create(data: Comic) {
    return this.http.post(this.baseurl, data);
  }
}

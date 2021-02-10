import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:5000';
  }

  get(url: string) {
    return this.http.get(`${this.ROOT_URL}/${url}`)
  }

  post(url: string, payload: any) {
    return this.http.post(`${this.ROOT_URL}/${url}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

}

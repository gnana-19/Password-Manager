import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpServiceService) { }

  // post
  addRow(obj: any) {
    return this.http.post("passwords", {
      "website": obj["website"],
      "password": obj["password"],
      "username": obj["username"]
    });
  }

  // get
  getAllRows() {
    return this.http.get("passwords");
  }

  getPassword() {
    return this.http.get("gen_pass/12");
  }

  // delete 
  delete(id: string) {
    return this.http.delete(`/passwords/${id}`);
  }
}

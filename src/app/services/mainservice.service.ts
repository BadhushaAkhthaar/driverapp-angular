import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http: HttpClient) { }

  getFreightOrders(){
    return this.http.get("/odata/driver");
  }
}

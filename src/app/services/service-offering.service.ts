import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCard } from '../models/service-offering-card';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferingService {
  private _jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) { }


  public getData(): Observable<ServiceCard[]> {
    return this.http.get<ServiceCard[]>(this._jsonURL)
  }
}

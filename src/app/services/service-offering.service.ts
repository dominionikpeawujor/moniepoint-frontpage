import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCard } from '../models/service-offering-card';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferingService {
  private _jsonURL = 'assets/data.json';

  constructor() { }
}

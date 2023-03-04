import { Component, OnInit } from '@angular/core';
import { ServiceCard } from 'src/app/models/service-offering-card';
import { ServiceOfferingService } from 'src/app/services/service-offering.service';

@Component({
  selector: 'app-service-offering',
  templateUrl: './service-offering.component.html',
  styleUrls: ['./service-offering.component.css']
})
export class ServiceOfferingComponent implements OnInit{

  services: ServiceCard[] = [];
  constructor(private serviceOfferingService:ServiceOfferingService) {}

  ngOnInit(): void {
    this.serviceOfferingService.getData().subscribe(data => {
      this.services = data;
    })
  }
}

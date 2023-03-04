import { Component, Input } from '@angular/core';
import { ServiceCard } from 'src/app/models/service-offering-card';

@Component({
  selector: 'app-service-offering-card',
  templateUrl: './service-offering-card.component.html',
  styleUrls: ['./service-offering-card.component.css']
})
export class ServiceOfferingCardComponent {

  @Input() service: ServiceCard;

  constructor() {
    this.service = {
      id: '1',
      service: '',
      url: '',
      description:''

    }
  }

}

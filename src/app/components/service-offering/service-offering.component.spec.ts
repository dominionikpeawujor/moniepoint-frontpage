import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOfferingComponent } from './service-offering.component';

describe('ServiceOfferingComponent', () => {
  let component: ServiceOfferingComponent;
  let fixture: ComponentFixture<ServiceOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOfferingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideMoniepointTestimonialsComponent } from './inside-moniepoint-testimonials.component';

describe('InsideMoniepointTestimonialsComponent', () => {
  let component: InsideMoniepointTestimonialsComponent;
  let fixture: ComponentFixture<InsideMoniepointTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideMoniepointTestimonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsideMoniepointTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

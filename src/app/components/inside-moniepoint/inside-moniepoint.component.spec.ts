import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideMoniepointComponent } from './inside-moniepoint.component';

describe('InsideMoniepointComponent', () => {
  let component: InsideMoniepointComponent;
  let fixture: ComponentFixture<InsideMoniepointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideMoniepointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsideMoniepointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

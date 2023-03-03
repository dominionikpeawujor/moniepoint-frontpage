import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromNewsroomCtoComponent } from './from-newsroom-cto.component';

describe('FromNewsroomCtoComponent', () => {
  let component: FromNewsroomCtoComponent;
  let fixture: ComponentFixture<FromNewsroomCtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromNewsroomCtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromNewsroomCtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

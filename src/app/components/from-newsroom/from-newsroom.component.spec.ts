import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromNewsroomComponent } from './from-newsroom.component';

describe('FromNewsroomComponent', () => {
  let component: FromNewsroomComponent;
  let fixture: ComponentFixture<FromNewsroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromNewsroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromNewsroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

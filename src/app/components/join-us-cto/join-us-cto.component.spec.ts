import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsCtoComponent } from './join-us-cto.component';

describe('JoinUsCtoComponent', () => {
  let component: JoinUsCtoComponent;
  let fixture: ComponentFixture<JoinUsCtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinUsCtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinUsCtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

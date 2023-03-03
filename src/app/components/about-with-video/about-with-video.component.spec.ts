import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWithVideoComponent } from './about-with-video.component';

describe('AboutWithVideoComponent', () => {
  let component: AboutWithVideoComponent;
  let fixture: ComponentFixture<AboutWithVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutWithVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWithVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

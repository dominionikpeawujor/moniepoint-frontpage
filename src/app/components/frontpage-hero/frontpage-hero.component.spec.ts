import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageHeroComponent } from './frontpage-hero.component';

describe('FrontpageHeroComponent', () => {
  let component: FrontpageHeroComponent;
  let fixture: ComponentFixture<FrontpageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontpageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

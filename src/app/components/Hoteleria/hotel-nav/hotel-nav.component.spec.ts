import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelNavComponent } from './hotel-nav.component';

describe('HotelNavComponent', () => {
  let component: HotelNavComponent;
  let fixture: ComponentFixture<HotelNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

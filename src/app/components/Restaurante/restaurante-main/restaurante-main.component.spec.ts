import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteMainComponent } from './restaurante-main.component';

describe('RestauranteMainComponent', () => {
  let component: RestauranteMainComponent;
  let fixture: ComponentFixture<RestauranteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

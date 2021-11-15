import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantePageComponent } from './restaurante-page.component';

describe('RestaurantePageComponent', () => {
  let component: RestaurantePageComponent;
  let fixture: ComponentFixture<RestaurantePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

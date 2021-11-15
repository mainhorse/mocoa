import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteNavComponent } from './restaurante-nav.component';

describe('RestauranteNavComponent', () => {
  let component: RestauranteNavComponent;
  let fixture: ComponentFixture<RestauranteNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

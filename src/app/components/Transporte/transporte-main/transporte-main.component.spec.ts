import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteMainComponent } from './transporte-main.component';

describe('TransporteMainComponent', () => {
  let component: TransporteMainComponent;
  let fixture: ComponentFixture<TransporteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

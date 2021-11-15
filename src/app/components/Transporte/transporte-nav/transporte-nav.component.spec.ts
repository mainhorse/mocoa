import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteNavComponent } from './transporte-nav.component';

describe('TransporteNavComponent', () => {
  let component: TransporteNavComponent;
  let fixture: ComponentFixture<TransporteNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporteNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

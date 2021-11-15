import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaPageComponent } from './agencia-page.component';

describe('AgenciaPageComponent', () => {
  let component: AgenciaPageComponent;
  let fixture: ComponentFixture<AgenciaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

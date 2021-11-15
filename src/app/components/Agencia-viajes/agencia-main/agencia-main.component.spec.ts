import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaMainComponent } from './agencia-main.component';

describe('AgenciaMainComponent', () => {
  let component: AgenciaMainComponent;
  let fixture: ComponentFixture<AgenciaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

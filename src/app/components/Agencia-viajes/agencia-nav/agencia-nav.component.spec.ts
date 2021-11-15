import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaNavComponent } from './agencia-nav.component';

describe('AgenciaNavComponent', () => {
  let component: AgenciaNavComponent;
  let fixture: ComponentFixture<AgenciaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

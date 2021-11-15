import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristaMainComponent } from './turista-main.component';

describe('TuristaMainComponent', () => {
  let component: TuristaMainComponent;
  let fixture: ComponentFixture<TuristaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuristaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

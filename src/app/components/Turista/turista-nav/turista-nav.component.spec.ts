import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristaNavComponent } from './turista-nav.component';

describe('TuristaNavComponent', () => {
  let component: TuristaNavComponent;
  let fixture: ComponentFixture<TuristaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuristaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

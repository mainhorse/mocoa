import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristaPageComponent } from './turista-page.component';

describe('TuristaPageComponent', () => {
  let component: TuristaPageComponent;
  let fixture: ComponentFixture<TuristaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuristaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

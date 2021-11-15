import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentRegisterComponent } from './home-content-register.component';

describe('HomeContentRegisterComponent', () => {
  let component: HomeContentRegisterComponent;
  let fixture: ComponentFixture<HomeContentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

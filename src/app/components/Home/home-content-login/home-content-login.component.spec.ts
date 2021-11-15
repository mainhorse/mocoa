import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentLoginComponent } from './home-content-login.component';

describe('HomeContentLoginComponent', () => {
  let component: HomeContentLoginComponent;
  let fixture: ComponentFixture<HomeContentLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContentLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

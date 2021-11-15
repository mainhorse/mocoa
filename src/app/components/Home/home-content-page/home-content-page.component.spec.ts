import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentPageComponent } from './home-content-page.component';

describe('HomeContentPageComponent', () => {
  let component: HomeContentPageComponent;
  let fixture: ComponentFixture<HomeContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

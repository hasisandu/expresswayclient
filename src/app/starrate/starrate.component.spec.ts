import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StarrateComponent} from './starrate.component';

describe('StarrateComponent', () => {
  let component: StarrateComponent;
  let fixture: ComponentFixture<StarrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StarrateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

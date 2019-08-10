import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowsinghystryComponent} from './browsinghystry.component';

describe('BrowsinghystryComponent', () => {
  let component: BrowsinghystryComponent;
  let fixture: ComponentFixture<BrowsinghystryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowsinghystryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsinghystryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FromExpressWayComponent} from './from-express-way.component';

describe('FromExpressWayComponent', () => {
  let component: FromExpressWayComponent;
  let fixture: ComponentFixture<FromExpressWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FromExpressWayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromExpressWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

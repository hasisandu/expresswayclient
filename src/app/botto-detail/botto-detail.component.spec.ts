import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottoDetailComponent } from './botto-detail.component';

describe('BottoDetailComponent', () => {
  let component: BottoDetailComponent;
  let fixture: ComponentFixture<BottoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

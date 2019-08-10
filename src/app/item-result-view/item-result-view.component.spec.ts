import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemResultViewComponent} from './item-result-view.component';

describe('ItemResultViewComponent', () => {
  let component: ItemResultViewComponent;
  let fixture: ComponentFixture<ItemResultViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemResultViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

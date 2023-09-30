import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamultiplicarComponent } from './tablamultiplicar.component';

describe('TablamultiplicarComponent', () => {
  let component: TablamultiplicarComponent;
  let fixture: ComponentFixture<TablamultiplicarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablamultiplicarComponent]
    });
    fixture = TestBed.createComponent(TablamultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

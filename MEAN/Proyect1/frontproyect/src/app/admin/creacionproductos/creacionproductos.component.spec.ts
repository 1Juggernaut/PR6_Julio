import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionproductosComponent } from './creacionproductos.component';

describe('CreacionproductosComponent', () => {
  let component: CreacionproductosComponent;
  let fixture: ComponentFixture<CreacionproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreacionproductosComponent]
    });
    fixture = TestBed.createComponent(CreacionproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

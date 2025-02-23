import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsTableComponent } from './deals-table.component';

describe('DealsTableComponent', () => {
  let component: DealsTableComponent;
  let fixture: ComponentFixture<DealsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealsTableComponent]
    });
    fixture = TestBed.createComponent(DealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

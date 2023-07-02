import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAfterCallComponent } from './rate-after-call.component';

describe('RateAfterCallComponent', () => {
  let component: RateAfterCallComponent;
  let fixture: ComponentFixture<RateAfterCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateAfterCallComponent]
    });
    fixture = TestBed.createComponent(RateAfterCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

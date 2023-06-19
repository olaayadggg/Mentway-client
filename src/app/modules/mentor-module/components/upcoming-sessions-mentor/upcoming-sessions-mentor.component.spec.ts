import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSessionsMentorComponent } from './upcoming-sessions-mentor.component';

describe('UpcomingSessionsMentorComponent', () => {
  let component: UpcomingSessionsMentorComponent;
  let fixture: ComponentFixture<UpcomingSessionsMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingSessionsMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSessionsMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

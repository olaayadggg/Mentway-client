import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMentorComponent } from './profile-mentor.component';

describe('ProfileMentorComponent', () => {
  let component: ProfileMentorComponent;
  let fixture: ComponentFixture<ProfileMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

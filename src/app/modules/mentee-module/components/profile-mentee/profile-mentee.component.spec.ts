import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenteeComponent } from './profile-mentee.component';

describe('ProfileMenteeComponent', () => {
  let component: ProfileMenteeComponent;
  let fixture: ComponentFixture<ProfileMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMenteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

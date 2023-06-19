import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileMentorComponent } from './edit-profile-mentor.component';

describe('EditProfileMentorComponent', () => {
  let component: EditProfileMentorComponent;
  let fixture: ComponentFixture<EditProfileMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

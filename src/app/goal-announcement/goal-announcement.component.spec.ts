import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAnnouncementComponent } from './goal-announcement.component';

describe('GoalAnnouncementComponent', () => {
  let component: GoalAnnouncementComponent;
  let fixture: ComponentFixture<GoalAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalAnnouncementComponent]
    });
    fixture = TestBed.createComponent(GoalAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

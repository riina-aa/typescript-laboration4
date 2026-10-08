import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInterface } from './course-interface';

describe('CourseInterface', () => {
  let component: CourseInterface;
  let fixture: ComponentFixture<CourseInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseInterface],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseInterface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

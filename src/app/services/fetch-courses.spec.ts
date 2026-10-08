import { TestBed } from '@angular/core/testing';

import { FetchCourses } from './fetch-courses';

describe('FetchCourses', () => {
  let service: FetchCourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

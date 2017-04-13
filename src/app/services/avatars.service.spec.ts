import { TestBed, inject } from '@angular/core/testing';

import { AvatarsService } from './avatars.service';

describe('AvatarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvatarsService]
    });
  });

  it('should ...', inject([AvatarsService], (service: AvatarsService) => {
    expect(service).toBeTruthy();
  }));
});

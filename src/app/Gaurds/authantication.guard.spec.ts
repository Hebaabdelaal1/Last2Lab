import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authanticationGuard } from './authantication.guard';

describe('authanticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authanticationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

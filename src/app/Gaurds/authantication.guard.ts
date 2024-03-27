import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { StaticProductsService } from '../Services/static-products.service';

export const authanticationGuard: CanActivateFn = (route, state) => {

  // let userauthan= inject(StaticProductsService)
  // return userauthan
  //not use true cus it not always return true
  return true;
};

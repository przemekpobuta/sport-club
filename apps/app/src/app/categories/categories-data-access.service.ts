import { Injectable, Injector } from '@angular/core';

import { RestService } from '../utils/rest.service';
import { Category } from './category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesDataAccessService extends RestService<Category> {
  constructor(protected _injector: Injector) {
    super(_injector, {
      module: 'category'
    });
  }
}

import { Injectable, Injector } from '@angular/core';

import { RestService } from '../utils/rest.service';

@Injectable({
  providedIn: 'root'
})
export class PositionsDataAccessService extends RestService<Position> {
  constructor(protected _injector: Injector) {
    super(_injector, {
      module: 'position'
    });
  }
}

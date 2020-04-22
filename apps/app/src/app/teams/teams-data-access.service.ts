import { Injectable, Injector } from '@angular/core';

import { RestService } from '../utils/rest.service';
import { Team } from './team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsDataAccessService extends RestService<Team> {
  constructor(protected _injector: Injector) {
    super(_injector, {
      module: 'team'
    });
  }
}

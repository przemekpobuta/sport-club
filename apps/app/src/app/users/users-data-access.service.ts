import { Injectable, Injector } from '@angular/core';

import { RestService } from '../utils/rest.service';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersDataAccessService extends RestService<User> {
  constructor(protected _injector: Injector) {
    super(_injector, {
      module: 'users'
    });
  }
}

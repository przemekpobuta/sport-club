import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './teams/teams.component';
import { EventsComponent } from './events/events.component';

export const routedComponents = [
  UsersComponent,
  TeamsComponent,
  EventsComponent
];

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

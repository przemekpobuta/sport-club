import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { EventsComponent } from './events/events.component';
import { PositionsComponent } from './positions/positions.component';
import { TeamsComponent } from './teams/teams.component';
import { UsersComponent } from './users/users.component';

export const routedComponents = [
  UsersComponent,
  TeamsComponent,
  EventsComponent,
  CategoriesComponent,
  PositionsComponent
];

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'positions',
    component: PositionsComponent
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

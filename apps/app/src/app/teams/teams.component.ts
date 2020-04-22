import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { CategoriesDataAccessService } from '../categories/categories-data-access.service';
import { Category } from '../categories/category.interface';
import { User } from '../users/user.interface';
import { UsersDataAccessService } from '../users/users-data-access.service';
import { CrudComponent } from '../utils/crud.component';
import { Team } from './team.interface';
import { TeamsDataAccessService } from './teams-data-access.service';

@Component({
  selector: 'sport-club-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent extends CrudComponent<Team, TeamsDataAccessService>
  implements OnInit {
  categories$: Observable<Category[]>;
  users$: Observable<User[]>;
  availablePlayers: User[];

  get playersControls(): any {
    return (this.formGroup.get('players') as FormArray).controls;
  }

  constructor(
    dataAccessService: TeamsDataAccessService,
    private formBuilder: FormBuilder,
    private usersDataAccessService: UsersDataAccessService,
    private categoriesDataAccessService: CategoriesDataAccessService
  ) {
    super(dataAccessService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = this.formBuilder.group({
      categoryId: ['', Validators.required],
      positionId: ['', Validators.required],
      players: new FormArray([])
    });

    this.categories$ = this.categoriesDataAccessService.getAll();
    this.users$ = this.usersDataAccessService.getAll();

    this.formGroup
      .get('categoryId')
      .valueChanges.pipe(
        switchMap(categoryId =>
          this.usersDataAccessService
            .getAll()
            .pipe(
              map(users =>
                users.filter(user => user.category.id === +categoryId)
              )
            )
        )
      )
      .subscribe(users => {
        this.availablePlayers = users;
        (this.formGroup.get('players') as FormArray).controls = [];
        users.forEach((o, i) => {
          const control = new FormControl(false);
          (this.formGroup.controls.players as FormArray).push(control);
        });
      });
  }

  processFormGroupValueBeforeSubmit(formValue: Team): Team {
    formValue['players'] = formValue['players']
      .map((v, i) => (v ? this.availablePlayers[i].id : null))
      .filter(v => v !== null);
    return formValue;
  }
}

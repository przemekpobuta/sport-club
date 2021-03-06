import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { CategoriesDataAccessService } from '../categories/categories-data-access.service';
import { Category } from '../categories/category.interface';
import { Position } from '../positions/position.interface';
import { PositionsDataAccessService } from '../positions/positions-data-access.service';
import { User } from './user.interface';
import { UsersDataAccessService } from './users-data-access.service';

@Component({
  selector: 'sport-club-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  categories$: Observable<Category[]>;
  positions$: Observable<Position[]>;
  formGroup: FormGroup;

  constructor(
    private usersDataAccessService: UsersDataAccessService,
    private categoriesDataAccessService: CategoriesDataAccessService,
    private positionsDataAccessService: PositionsDataAccessService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      categoryId: ['', Validators.required],
      positionId: ['', Validators.required]
    });
    this.getUsers();
    this.categories$ = this.categoriesDataAccessService.getAll();
    this.positions$ = this.positionsDataAccessService.getAll();
  }

  getUsers(): void {
    this.users$ = this.usersDataAccessService.getAll();
  }

  submitCreateUser(): void {
    if (this.formGroup.valid) {
      this.usersDataAccessService.post(this.formGroup.value).subscribe(() => {
        this.getUsers();
      });
    }
  }

  deleteUser(id: number): void {
    this.usersDataAccessService.delete(id).subscribe(() => {
      this.getUsers();
    });
  }
}

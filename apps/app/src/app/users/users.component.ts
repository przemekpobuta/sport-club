import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { User } from './user.interface';
import { UsersDataAccessService } from './users-data-access.service';

@Component({
  selector: 'sport-club-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  formGroup: FormGroup;

  constructor(
    private usersDataAccessService: UsersDataAccessService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.getUsers();
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

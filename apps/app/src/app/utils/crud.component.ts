import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { RestServiceInterface } from './rest.service';

export abstract class CrudComponent<
  TYPE,
  STATE_SERVICE extends RestServiceInterface<TYPE, number>
> implements OnInit {
  formGroup: FormGroup;
  entities$: Observable<TYPE[]>;

  protected constructor(protected readonly _dataAccessService: STATE_SERVICE) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.entities$ = this._dataAccessService.getAll();
  }

  submit(): void {
    if (this.formGroup.valid) {
      this._dataAccessService.post(this.formGroup.value).subscribe(() => {
        this.formGroup.reset();
        this.getList();
      });
    }
  }

  delete(id: number): void {
    this._dataAccessService.delete(id).subscribe(() => {
      this.getList();
    });
  }
}

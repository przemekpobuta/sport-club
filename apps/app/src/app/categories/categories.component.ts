import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CrudComponent } from '../utils/crud.component';
import { CategoriesDataAccessService } from './categories-data-access.service';
import { Category } from './category.interface';

@Component({
  selector: 'sport-club-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent
  extends CrudComponent<Category, CategoriesDataAccessService>
  implements OnInit {
  constructor(
    dataAccessService: CategoriesDataAccessService,
    private formBuilder: FormBuilder
  ) {
    super(dataAccessService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
}

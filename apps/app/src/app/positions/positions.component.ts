import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CrudComponent } from '../utils/crud.component';
import { PositionsDataAccessService } from './positions-data-access.service';

@Component({
  selector: 'sport-club-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent
  extends CrudComponent<Position, PositionsDataAccessService>
  implements OnInit {
  constructor(
    dataAccessService: PositionsDataAccessService,
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

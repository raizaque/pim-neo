import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Data } from './models/model';
import { FormService } from './services/form.service';
import { tap, pairwise, map, filter, take, delay } from 'rxjs/operators';
import { PimFormBuilder } from './pim-form-builder';
import { of } from 'rxjs';
import { PimFormFactory } from './pim-form-factory';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private data: Data;
  private builder: PimFormBuilder;
  myForm: FormGroup;
  multiEditForm: FormGroup;

  constructor(
    private pimFormFactory: PimFormFactory,
    private formService: FormService,
    private formBuilder: FormBuilder
  ) {
    this.formService
      .getAggregateDatas()
      .pipe(
        tap((d) => {
          this.data = d;
        })
      )
      .subscribe();

    this.builder = pimFormFactory.createInstance();
    this.myForm = this.builder.setTabs(this.data.tabs).initialise();
  }

  ngOnInit() {
    this.myForm.valueChanges
      .pipe(
        tap((x) => {
          const map = this.builder.getChanges();
          for (let key of map.keys()) {
            console.log('je suis  la', key, map.get(key));
          }
        })
      )
      .subscribe();
  }

  onSubmit() {
    alert(this.myForm.value);
  }

  private simulateTabChanges(pimFormBuilder: PimFormBuilder) {
    of(null)
      .pipe(
        take(1),

        delay(4000),
        tap(() => {
          this.myForm = pimFormBuilder
            .updateTab(Object.assign(this.data.tabs, {})[1], 1)
            .initialise();
        })
      )
      .subscribe();
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { Attribute, GtinModel } from '../../../models/model';
import { PimFormSubscriber } from '../../../pim-form-subscriber';

@Component({
  selector: 'app-gtin-default',
  templateUrl: './gtin-default.component.html',
  styleUrls: ['./gtin-default.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GtinDefaultComponent implements OnInit, OnDestroy {
  @Input() form: FormControl;
  @Input() subscribe: boolean = false;

  constructor(private pimFormSubscriber: PimFormSubscriber) {}

  ngOnDestroy(): void {
    this.pimFormSubscriber.removeFromPool(this.form.value.id);
  }

  ngOnInit() {
    const obs = this.form.valueChanges.pipe(
      tap((v: GtinModel) => {
        v.gtinDefaultSelected = v.gtinDefault || v.gtinDefaultSelected;
        this.form.setValue(v, { emitEvent: false });
      })
    );

    this.pimFormSubscriber.addInPool(this.form.value.id, obs);
  }
}

import { Injectable, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Attribute } from './models/model';
import { PimFormBuilder } from './pim-form-builder';
import {
  AbstractAttributeStrategy,
  AttributeStrategyMap,
} from './pim-form-strategy';

@Injectable({
  providedIn: 'root',
})
export class PimFormFactory {
  constructor(private fb: FormBuilder, private injector: Injector) {}

  createInstance(): PimFormBuilder {
    return new PimFormBuilder(this.fb, this);
  }

  createAttribut(attribut: Attribute): FormGroup {
    return this.injector
      .get<AbstractAttributeStrategy>(AttributeStrategyMap.get(attribut.type))
      .getFormGroup(this.fb, attribut);
  }
}

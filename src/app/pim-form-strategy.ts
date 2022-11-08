import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ATTRIBUT_ENUM } from './enum/attributenum';
import {
  Attribute,
  GtinModel,
  TextAreaModel,
  TextModel,
  MvaModel,
  ChannelModel,
} from './models/model';

export abstract class AbstractAttributeStrategy {
  protected formGroup: FormGroup;
  protected formGroups: Map<number, FormGroup>;
  protected fb: FormBuilder;
  constructor() {
    this.formGroups = new Map();
  }
  abstract getFormGroup(fb: FormBuilder, att: Attribute): FormGroup;
}

@Injectable({
  providedIn: 'any',
})
export class MvaStrategy extends AbstractAttributeStrategy {
  constructor() {
    super();
  }
  getFormGroup(fb: FormBuilder, att: MvaModel): FormGroup<any> {
    this.fb = fb;
    //if (!this.formGroup) {
    this.formGroup = this.fb.group({
      label: att.label,
      id: att.id,
      type: att.type,
      childId: att.childId,
      parentId: att.parentId,
      value: [att.value, [Validators.required]],
    });
    // }
    return this.formGroup;
  }
}

@Injectable({
  providedIn: 'any',
})
export class TextStrategy extends AbstractAttributeStrategy {
  constructor() {
    super();
  }
  getFormGroup(fb: FormBuilder, att: TextModel): FormGroup<any> {
    this.fb = fb;
    //if (!this.formGroup) {
    this.formGroup = this.fb.group({
      ...att,
      value: [att.value, [Validators.required]],
    });
    //}
    return this.formGroup;
  }
}

@Injectable({
  providedIn: 'any',
})
export class TextAreaStrategy extends AbstractAttributeStrategy {
  constructor() {
    super();
  }
  getFormGroup(fb: FormBuilder, att: TextAreaModel): FormGroup<any> {
    this.fb = fb;
    //if (!this.formGroup) {
    this.formGroup = this.fb.group({
      ...att,
      value: [att.value, [Validators.required]],
    });
    //}
    return this.formGroup;
  }
}

@Injectable({
  providedIn: 'any',
})
export class GtinDefaultStrategy extends AbstractAttributeStrategy {
  constructor() {
    super();
  }
  getFormGroup(fb: FormBuilder, att: GtinModel): FormGroup<any> {
    this.fb = fb;
    if (this.formGroups.has(att.id)) {
      return this.formGroups.get(att.id);
    }

    this.formGroup = this.fb.group({
      ...att,
      gtinDefault: [att.gtinDefault, []],
      gtinDefaultSelected: [att.gtinDefaultSelected, []],
    });

    this.formGroups.set(att.id, this.formGroup);
    return this.formGroup;
  }
}

@Injectable({
  providedIn: 'any',
})
export class ChannelStrategy extends AbstractAttributeStrategy {
  constructor() {
    super();
  }
  getFormGroup(fb: FormBuilder, att: ChannelModel): FormGroup<any> {
    this.fb = fb;
    if (this.formGroups.has(att.id)) {
      return this.formGroups.get(att.id);
    }

    this.formGroup = this.fb.group({
      ...att,
    });
    if (att.isActive) {
      this.formGroup.enable();
    } else {
      this.formGroup.disable();
    }

    this.formGroups.set(att.id, this.formGroup);
    return this.formGroup;
  }
}

export const AttributeStrategyMap: Map<ATTRIBUT_ENUM, any> = new Map<
  ATTRIBUT_ENUM,
  any
>([
  [ATTRIBUT_ENUM.MVA, MvaStrategy],
  [ATTRIBUT_ENUM.TEXT, TextStrategy],
  [ATTRIBUT_ENUM.TEXTAREA, TextAreaStrategy],
  [ATTRIBUT_ENUM.GTIN_DEFAULT, GtinDefaultStrategy],
  [ATTRIBUT_ENUM.CHANNEL, ChannelStrategy],
]);

import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ATTRIBUT_ENUM } from './enum/attributenum';
import { Rubrique, Tab, Group, Attribute } from './models/model';
import { PimFormFactory } from './pim-form-factory';

export class PimFormBuilder {
  private pimForm: FormGroup;

  constructor(private fb: FormBuilder, private factory: PimFormFactory) {
    this.pimForm = this.fb.group({
      tabs: this.fb.array([]),
    });
  }

  public initialise(): FormGroup {
    return this.pimForm;
  }

  private getTabsControl(): FormArray {
    return <FormArray>this.pimForm.controls.tabs;
  }

  public setTabs(tabs: Tab[] = []): PimFormBuilder {
    tabs.forEach((tab) => {
      this.addTab(tab);
    });
    return this;
  }

  private setRubriques(rubriques: Rubrique[] = []): FormArray {
    const arr = new FormArray([]);
    rubriques.forEach((rub) => arr.push(this.addRubrique(rub)));
    return arr;
  }

  private setGroups(groups: Group[] = []): FormArray {
    const arr = new FormArray([]);
    groups.forEach((group) => arr.push(this.addGroup(group)));
    return arr;
  }

  private setAttributs(attributs: Attribute[] = []): FormArray {
    const arr = new FormArray([]);
    attributs.forEach((att) => arr.push(this.addAttribut(att)));
    return arr;
  }

  public addTab(tab: Tab): PimFormBuilder {
    const control = this.getTabsControl();
    control.push(
      this.fb.group({
        label: tab.label,
        rubriques: this.setRubriques(tab.rubriques),
      })
    );
    return this;
  }

  private addRubrique(rubrique: Rubrique): FormGroup {
    return this.fb.group({
      label: rubrique.label,
      groups: this.setGroups(rubrique.groups),
    });
  }

  private addGroup(group: Group): FormGroup {
    return this.fb.group({
      label: [group.label, [Validators.required]],
      attributes: this.setAttributs(group.attributes),
    });
  }

  private addAttribut(attribut: Attribute): FormGroup {
    //Todo create a attribut form factory
    return this.factory.createAttribut(attribut);
  }

  public updateTab(tab: Tab, index: number): PimFormBuilder {
    const control = this.getTabsControl();
    if (control.at(index)) {
      control.setControl(
        index,
        this.fb.group({
          label: tab.label,
          rubriques: this.setRubriques(tab.rubriques),
        })
      );
    }

    return this;
  }

  public getChanges(): Map<number, Attribute> {
    const map: Map<number, Attribute> = new Map<number, Attribute>();
    this.getUpdates(this.pimForm, map);

    return map;
  }

  private getUpdates(
    formItem: FormGroup | FormArray | FormControl,
    updatedValues: Map<number, Attribute>
  ) {
    if (!(formItem instanceof FormControl)) {
      for (const formControlName in formItem.controls) {
        if (formItem.controls.hasOwnProperty(formControlName)) {
          const formControl = formItem.controls[formControlName];

          if (formControl instanceof FormControl) {
            this.getUpdates(formControl, updatedValues);
          } else if (
            formControl instanceof FormArray &&
            formControl.dirty &&
            formControl.controls.length > 0
          ) {
            this.getUpdates(formControl, updatedValues);
          } else if (formControl instanceof FormGroup && formControl.dirty) {
            if (formControl?.value?.type) {
              updatedValues = updatedValues.set(
                formControl.value.id,
                formControl.value as Attribute
              );
            } else {
              this.getUpdates(formControl, updatedValues);
            }
          }
        }
      }
    }
  }
}

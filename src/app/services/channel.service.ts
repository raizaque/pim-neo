import { Injectable } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ChannelModel, Attribute } from '../models/model';

@Injectable()
export class ChannelService {
  private channels: Map<number, ChannelModel>;
  constructor() {
    this.channels = new Map();
  }

  public add(att: ChannelModel, group: FormArray<any> | FormGroup<any>) {
    if (att) {
      this.channels.set(att.id, att);
      if (this.hasChild(att)) {
        att.child.isActive = true;
        this.findChild(att, group)?.enable();
      }
    }
  }

  private hasChild(att: Attribute): boolean {
    return att.child ? true : false;
  }

  private findChild(
    att: Attribute,
    group: FormArray<any> | FormGroup<any>
  ): FormControl {
    for (let i = 0; i < group.controls.length; i++) {
      if (group.controls[i].controls['id'].value === att.child.id) {
        return group.controls[i];
      }
    }

    return null;
  }
}

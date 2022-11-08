import { TargetMenuAim } from '@angular/cdk/menu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ATTRIBUT_ENUM } from '../enum/attributenum';

export interface Tab {
  label: string;
  visibility: VisibilityEnum;
  rubriques: Rubrique[];
}

export interface Rubrique {
  label: string;
  groups: Group[];
}

export interface Group {
  label: string;
  attributes: Attribute[];
}

export abstract class Attribute {
  id: number;
  type: ATTRIBUT_ENUM;
  label: string;
  parentId?: number;
  childId?: number;
  child?: Attribute;
  parent?: Attribute;
  isActive: boolean = true;
}

export interface Lov {
  value: string;
  order: number;
}

export interface Data {
  tabs: Tab[];
}

export enum VisibilityEnum {
  VISIBLE,
  HIDDEN,
  COLLAPSE,
}

export class MvaModel extends Attribute {
  value: Lov[];
}

export class TextAreaModel extends Attribute {
  value: string;
}

export class TextModel extends Attribute {
  value: string;
}

export class GtinModel extends Attribute {
  gtinDefault: boolean;
  gtinDefaultSelected: boolean;
}

export class ChannelModel extends Attribute {
  dateFrom: Date;
  dateTo: Date;
  state: StateChannelEnum;
}
export enum StateChannelEnum {
  NOT_PUBLISHED,
  PUBLISHED,
  ERROR,
}

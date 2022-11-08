import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ATTRIBUT_ENUM } from '../enum/attributenum';
import {
  Data,
  Group,
  Lov,
  TextModel,
  TextAreaModel,
  Attribute,
  MvaModel,
  GtinModel,
  ChannelModel,
  StateChannelEnum,
  Rubrique,
  Tab,
  VisibilityEnum,
} from '../models/model';

@Injectable()
export class FormService {
  private att_400: ChannelModel = {
    label: 'Channel1',
    id: 400,
    type: ATTRIBUT_ENUM.CHANNEL,
    dateFrom: new Date(),
    dateTo: new Date(),
    state: StateChannelEnum.NOT_PUBLISHED,
    isActive: true,
  };

  private att_401: ChannelModel = {
    label: 'Channel2',
    id: 401,
    type: ATTRIBUT_ENUM.CHANNEL,
    dateFrom: new Date(),
    dateTo: new Date(),
    state: StateChannelEnum.NOT_PUBLISHED,
    isActive: false,
  };

  private data = {
    tabs: [
      {
        label: 'Tab1',
        visibility: VisibilityEnum.HIDDEN,
        rubriques: [
          {
            label: 'Rubrique1',
            groups: [
              {
                label: 'Group1',
                attributes: [
                  { ...this.att_400, child: this.att_401 },
                  { ...this.att_401, parent: this.att_400 },
                ] as Attribute[],
              } as Group,

              {
                label: 'Group1',
                attributes: [
                  {
                    label: 'Att1',
                    id: 1,
                    type: ATTRIBUT_ENUM.TEXT,
                    value: ' Je suis un simple Text',
                    childId: 2,
                  } as TextModel,
                  {
                    label: 'Att2',
                    id: 2,
                    type: ATTRIBUT_ENUM.TEXTAREA,
                    value: 'Je suis un TextArea',
                    parentId: 1,
                  } as TextAreaModel,
                  {
                    label: 'Att3',
                    id: 3,
                    type: ATTRIBUT_ENUM.MVA,
                    value: [
                      {
                        order: 1,
                        value: 'Je suis un multivalue order1',
                      } as Lov,
                      {
                        order: 2,
                        value: 'Je suis un multivalue order2',
                      } as Lov,
                    ] as Lov[],
                  } as MvaModel,
                  {
                    label: 'Gtin Default',
                    id: 10,
                    type: ATTRIBUT_ENUM.GTIN_DEFAULT,
                    gtinDefault: false,
                    gtinDefaultSelected: false,
                  } as GtinModel,
                ] as Attribute[],
              } as Group,
              {
                label: 'Group2',
                attributes: [
                  {
                    label: 'Att4',
                    id: 4,
                    type: ATTRIBUT_ENUM.TEXT,
                    value: 'Attribut de type 1 dans le group2',
                  } as TextModel,
                  {
                    label: 'Att5',
                    id: 5,
                    type: ATTRIBUT_ENUM.TEXT,
                    value: 'Attribut de type 1 dans le group2',
                  } as TextModel,
                  {
                    label: 'Gtin Default',
                    id: 10,
                    type: ATTRIBUT_ENUM.GTIN_DEFAULT,
                    gtinDefault: false,
                    gtinDefaultSelected: false,
                  } as GtinModel,
                ] as Attribute[],
              } as Group,
            ] as Group[],
          } as Rubrique,
          {
            label: 'Rubrique2',
            groups: [
              {
                label: 'Group1',
                attributes: [
                  {
                    label: 'Att5',
                    id: 5,
                    type: ATTRIBUT_ENUM.TEXT,
                    value: ' Je suis un simple Text',
                  } as TextModel,
                ] as Attribute[],
              } as Group,
              {
                label: 'Group2',
                attributes: [
                  {
                    label: 'Att6',
                    id: 6,
                    type: ATTRIBUT_ENUM.TEXT,
                    value: 'Attribut de type 1 dans le group2',
                  } as TextModel,
                ] as Attribute[],
              } as Group,
            ] as Group[],
          } as Rubrique,
        ] as Rubrique[],
      } as Tab,
      {
        label: 'Tab2',
        rubriques: [
          {
            label: 'Rubrique1',
            groups: [
              {
                label: 'Group1',
                attributes: [
                  {
                    label: 'Att7',
                    id: 7,
                    type: ATTRIBUT_ENUM.TEXT,
                    value: ' Je suis un simple Text',
                  } as TextModel,
                  {
                    label: 'Att8',
                    id: 8,
                    type: ATTRIBUT_ENUM.TEXTAREA,
                    value: 'Je suis un TextArea',
                  } as TextAreaModel,
                  {
                    label: 'Att9',
                    id: 9,
                    type: ATTRIBUT_ENUM.MVA,
                    value: [
                      { order: 1, value: 'Je suis un multivalue order1' },
                      { order: 2, value: 'Je suis un multivalue order2' },
                    ],
                  } as MvaModel,
                ] as Attribute[],
              } as Group,
              {
                label: 'Group2',
                attributes: [
                  {
                    label: 'Att10',
                    id: 10,
                    type: ATTRIBUT_ENUM.TEXT,
                    value: 'Attribut de type 1 dans le group2',
                  } as TextModel,
                ] as Attribute[],
              } as Group,
            ] as Group[],
          } as Rubrique,
        ] as Rubrique[],
      } as Tab,
    ] as Tab[],
  } as Data;

  constructor() {}

  public getAggregateDatas(): Observable<Data> {
    return of(this.data);
  }
}

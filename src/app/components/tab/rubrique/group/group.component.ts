import { Component, OnInit, Input } from '@angular/core';
import { ATTRIBUT_ENUM } from '../../../../enum/attributenum';
import { Group } from '../../../../models/model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  @Input() group: Group;
  public attributeEnum = ATTRIBUT_ENUM;
  constructor() {}

  ngOnInit() {}
}

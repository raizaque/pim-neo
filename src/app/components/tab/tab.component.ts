import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../../models/model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  @Input() tab: Tab;
  constructor() {}

  ngOnInit() {}
}

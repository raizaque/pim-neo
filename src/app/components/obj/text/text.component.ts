import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Attribute } from '../../../models/model';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {
  @Input() form: FormControl;
  constructor() {}

  ngOnInit() {}
}

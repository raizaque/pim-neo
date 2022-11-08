import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Attribute } from '../../../models/model';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent implements OnInit {
  @Input() form: FormControl;
  constructor() {}

  ngOnInit() {}
}

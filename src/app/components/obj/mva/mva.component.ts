import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Lov } from '../../../models/model';

@Component({
  selector: 'app-mva',
  templateUrl: './mva.component.html',
  styleUrls: ['./mva.component.css'],
})
export class MvaComponent implements OnInit {
  @Input() form: FormControl;
  constructor() {}

  ngOnInit() {}
}

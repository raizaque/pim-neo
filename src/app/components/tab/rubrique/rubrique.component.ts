import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.css'],
})
export class RubriqueComponent implements OnInit {
  @Input() rubrique: RubriqueComponent;
  public hidden: boolean = false;
  constructor() {}

  ngOnInit() {}

  test(event) {
    this.hidden = !!event.collapsed;
  }
}

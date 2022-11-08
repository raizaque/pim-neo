import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-att',
  templateUrl: './att.component.html',
  styleUrls: ['./att.component.css']
})
export class AttComponent implements OnInit {
  @Input() attribute: any;
  constructor() { }

  ngOnInit() {
    
  }

}
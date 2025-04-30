import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-b1',
  templateUrl: './child-b1.component.html',
  styleUrls: ['./child-b1.component.css']
})

export class ChildB1Component {
  @Input() number: any;
}

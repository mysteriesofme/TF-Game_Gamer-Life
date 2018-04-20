import { Component, OnInit, Input } from '@angular/core';
import {Action} from "../action";

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @Input() actions: Array<Action>;

  constructor() { }

  ngOnInit() {
  }

}

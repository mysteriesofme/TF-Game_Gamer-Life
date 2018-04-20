import { Component, OnInit, Input } from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-intractable',
  templateUrl: './intractable.component.html',
  styleUrls: ['./intractable.component.css']
})
export class IntractableComponent implements OnInit {
  @Input() items: Array<Item>;

  constructor() { }

  ngOnInit() {
  }

  public getSrc(src: string) : string {
    return "assets/img/items/" + src;
  }

}

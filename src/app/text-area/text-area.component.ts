import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {Story} from "../Story";
import {StoryText} from "../StoryText";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  @Input() log: Array<StoryText>;
  @Input() story: Story;
  private myScrollContainer: ElementRef;

  constructor(el: ElementRef) {
    this.myScrollContainer = el;
  }

  public continue() : void {
    this.story.continue();
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  public scrollToBottom() : void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err){

    }
  }

}

import { Component } from '@angular/core';
import { Player } from './player';
import { Room } from "./room";
import { Hallway } from "./hallway";
import { Item } from "./item";
import { StoryText } from "./StoryText";
import { Story } from "./Story";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  log: Array<StoryText>;
  story: Story;
  rooms: Array<Room>;
  curItem: Item;
  currentRoom: number;
  title = 'Gamer Life';
  curPlayer = new Player();
  boxUnlocked: boolean;

  constructor(){
    this.boxUnlocked = false;
    this.log = new Array();
    this.rooms = new Array();
    this.story = new Story(this);

    // Intial Texts
    this.log[0] = new StoryText("So are you game to risk your fate for a chance to win the life you want?", true,"Scarlet", "scarlet.png");
    this.story.addEntry("All I have to do is find the four keys to get out right?", "Mike", "player1.png");
    this.story.addEntry("Right and the objects in the rooms can help you with solving the riddles. But! Interacting with them will cause you to transform into a cute gamer <3", "Scarlet", "scarlet.png");
    this.story.addEntry("You can also just complete your transformation and " +
        "work for me <3 sure you’d technically be losing, but it might just be what you want?" +
        "\n\nSo are you game?", "Scarlet", "scarlet.png");
    this.story.addEntry("Yeah, this should be easy enough.", "Mike", "player1.png");
    this.story.addEntry("Scarlet hold out her hand to make it official. " +
        "Seeing the chance to change his live for the better Mike grabs her hand and shakes it. " +
        "A playful smirk crosses Scarlets face as she lets go and raises her hand snapping her fingers");
    this.story.addEntry("Mike feels dizzy as the word around him shifts. All he saw was a blur as he was transported into the hallway of an unfamiliar apartment. It was a surprisingly large, boating at least 4 rooms, judging by the doors. Assumably a room for each key." +
        "\n\nThe hallway was pretty bare other than a coat rack and a little table near the front door on which a Nintendo was laying.");
    this.story.addEntry("I guess I should start looking for the keys now.", "Mike", "player1.png");
    this.story.addEntry("Mike wanders the hallway, exploring it for hints for where to start.");

    // Rooms
    this.currentRoom = 0;
    this.rooms[0] = new Hallway(0,this);
    this.rooms[1] = new Hallway(1,this);
    this.rooms[2] = new Hallway(2,this);
  }

  public addText(text: string, name?:string, src?:string){
    var isDialog = (name !== undefined && name.length > 0);
    this.addEntry(new StoryText(text, isDialog, name, src));
  }

  public addEntry(storyText: StoryText){
    this.log[this.log.length] = storyText;
  }

  public changeRoom(roomNr: number){
    this.currentRoom = roomNr;
  }

  public getCurrentRoom() : Room {
    if(this.currentRoom === undefined || this.currentRoom < 0 || this.currentRoom > 5) {
      this.currentRoom = 0;
    }
    return this.rooms[this.currentRoom];
  }
}

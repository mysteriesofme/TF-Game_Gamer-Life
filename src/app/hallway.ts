
import {Room} from "./room";
import {Item} from "./item";
import {Action} from "./action";
import {FrontDoor} from "./item";
import {RoomDoor} from "./item";
import {Nintendo3DS} from "./item";
export class Hallway extends Room {
    public constructor(roomNr, app){
        super(roomNr, app);
        this.firstText = "";
        this.usualText = "";
        this.items[this.items.length] = new FrontDoor(app);
        this.items[this.items.length] = new RoomDoor(app,"Bedroom door",1);
        this.items[this.items.length] = new RoomDoor(app,"Bathroom door",2);
        this.items[this.items.length] = new RoomDoor(app,"Kithen door",3);
        this.items[this.items.length] = new RoomDoor(app,"Livingroom door",4);
        this.items[this.items.length] = new Nintendo3DS(app);

    }
}
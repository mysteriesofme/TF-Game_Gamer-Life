import {AppComponent} from "./app.component";
import { Item } from "./item";

export class Room {
    protected hasBeenEntered: boolean;
    protected firstText: string;
    protected usualText: string;
    protected roomNr: number;
    protected items: Array<Item>;
    protected app: AppComponent;

    public constructor(roomNr, app){
        this.roomNr = roomNr;
        this.app = app;
        this.items = new Array();
    }

    public enterRoom(){
        if(this.hasBeenEntered){
            this.app.addText(this.usualText);
        } else {
            this.app.addText(this.firstText);
            this.hasBeenEntered = false;
        }
    }
}
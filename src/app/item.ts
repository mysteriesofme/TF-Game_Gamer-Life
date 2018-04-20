import { Action } from "./action";
import { AppComponent } from "./app.component";
import {ChangeRoomsAction} from "./action";
import {PlayZeldaOcarinaAction} from "./action";
import {PlayPokemonYAction} from "./action";

export class Item {
    protected name: string;
    protected src: string;
    protected slug: string;
    protected actions:Array<Action>;
    protected firstUse: boolean;
    protected listActions: boolean;
    protected app: AppComponent;

    public constructor(app: AppComponent, name: string, src: string, slug?: string){
        this.app = app;
        this.name = name;
        this.src = src;
        if(slug === undefined && name !== undefined){
            this.slug = name.toLowerCase().replace(" ","-");
        } else {
            this.slug = slug;
        }
        this.firstUse = true;
        this.listActions = false;
        this.actions = new Array();
    }

    public addAction(action:Action){
        this.actions[this.actions.length] = action;
    }

    public getActions(){
        return this.actions;
    }

    public click(){
        console.log("Beep!");
        console.log("Boop "+this.actions.length+"!");
        if(this.firstUse){
            this.firstUse = false;
        }
        if(this.actions.length == 1){
            this.actions[0].execute();
        } else {
            this.app.curItem = this;
            console.log(this.app.curItem);
        }
    }

    public getSrc(){
        return this.src;
    }

    public getSlug(){
        return this.slug;
    }

    public getName(){
        return this.name;
    }

}

export class FrontDoor extends Item {
    public constructor(app: AppComponent){
        super(app,"Front Door", "front-door.png");
    }
}

export class RoomDoor extends Item {
    protected roomNr: number;

    public constructor(app: AppComponent, name: string, roomNr: number){
        super(app,name,"door.png");
        this.addAction(new ChangeRoomsAction(app,"Open " + name, roomNr));
    }
}

export class Nintendo3DS extends Item {
    public constructor(app:AppComponent){
        super(app,"Nindendo 3DS","n3ds-icon.png");
        this.addAction(new PlayPokemonYAction(app));
        this.addAction(new PlayZeldaOcarinaAction(app));
    }
}
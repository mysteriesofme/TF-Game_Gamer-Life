import { AppComponent } from "./app.component";
import { StoryText } from "./StoryText";
import { LogoVals } from "./LogoVals";

export class Action {
    protected name: string;
    protected slug: string;
    protected app: AppComponent;
    protected executions: number;

    public constructor(app: AppComponent,name: string, slug?: string){
        this.app = app;
        this.name = name;
        if(slug === undefined && name !== undefined){
            this.slug = name.toLowerCase().replace(" ","-");
        } else {
            this.slug = slug;
        }
    }

    public getName() : string {
        return this.name;
    }

    public getSlug() : string {
        return this.slug;
    }

    public execute(){
        this.app.curItem = null;
    }

    public clearItem(){
        this.app.curItem = null;
    }
}

export class OpenFrontDoorAction extends Action {
    protected constructor(app:AppComponent){
        super(app,"Open Front Door");
    }
}

export class ChangeRoomsAction extends Action {
    protected roomNr: number;

    public constructor(app: AppComponent, name: string, roomNumber: number){
        super(app,name);
        this.roomNr = roomNumber;
    }

    public execute(){
        this.app.addEntry(new StoryText("Odd the door can't be opened..."))
        //this.app.changeRoom(this.roomNr);
        this.clearItem();
    }
}

export class PlayPokemonYAction extends Action {
   public constructor(app: AppComponent) {
       super(app, "Play Pokemon Y");
   }

   public execute() {
       var msg = "Mike picks up the Nintendo 3DS, and start up Pokemon Y. ";
       var tf = true;
       if(!this.app.curPlayer.hasLogo()){
           msg += " A Pokeball Logo appears on your shirt.";
           this.app.curPlayer.setLogo(LogoVals.Pokeballs);
           tf = false;
           this.executions -=1;
       } else {
           if(this.executions = 0){

           }
       }
       switch(this.app.curPlayer.getStage()){
           case 0, 1, 2:
               msg += " You play it for a bit and find it's kind of fun.";
               if(tf){
                   this.app.curPlayer.progressTransformation(2);
                   msg += " Playing the game causes you to change a bit, the sensation of the magic of the game running it's course of you feels odd.";
               }
               break;
           case 3, 4:
               msg += " You play it for a bit and find it's kind of fun.";
               if(tf){
                   this.app.curPlayer.progressTransformation(0.75);
                   msg += " Playing the game causes you to change a bit, the sensation of the magic of the game running it's course of you feels odd.";
               }
               break;
               msg += " You play it for a bit and find it's rather fun.";
               if(tf){
                   this.app.curPlayer.progressTransformation(0.3);
                   msg += " Playing the game causes you to change a bit, the sensation of the magic of the game running it's course of you feels odd.";
               }
           case 5, 6:
               msg += " You play it for a bit and find it's really fun.";
               if(tf){
                   this.app.curPlayer.progressTransformation(0.1);
                   msg += " Playing the game causes you to change a bit, the sensation of the magic of the game running it's course of you feels odd.";
               }
               break;
           default:
               msg += " You play it for a bit and find you're really enjoying it.";
       }
       this.app.addEntry(new StoryText(msg));
       this.clearItem();
       this.executions++;
   }
}

export class PlayZeldaOcarinaAction extends Action {
   public constructor(app: AppComponent) {
       super(app, "Play Zelda Ocarina of Time");
   }

   public execute() {
       this.app.addEntry(new StoryText("Mike picks up the Nintendo 3DS"));
       this.app.curPlayer.progressTransformation(10);
       this.clearItem();
   }
}
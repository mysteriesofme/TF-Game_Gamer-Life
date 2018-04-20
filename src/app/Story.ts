import {StoryText} from "./StoryText";
import {AppComponent} from "./app.component";

export class Story{
    protected entries: Array<StoryText>;
    protected app: AppComponent;

    public constructor(app: AppComponent){
        this.entries = new Array();
        this.app = app;
    }

    public addEntry(text:string,name?:string, src?:string) {
        var isDialog = (name !== undefined && name.length > 0);
        this.addEntryStoryText(new StoryText(text,isDialog,name,src));
    }

    public addEntryStoryText(storyText: StoryText){
        this.entries.push(storyText);
    }

    public hasEntries(){
        if(this.entries === undefined){
            return false;
        }
        return this.entries.length > 0;
    }

    public continue(){
        this.app.addEntry(this.entries[0]);
        this.entries.splice(0,1);
    }


}

export class StoryText {
    protected txt: string;
    protected src: string;
    protected name: string;
    protected dialog: boolean;

    public constructor(txt: string, isDialog?:boolean, name?:string, src?:string){
        this.txt = txt;
        if(isDialog !== undefined && isDialog == true){
            this.name = name;
            this.src = src;
            this.dialog = true;
        } else {
            this.dialog = false;
        }
    }

    public getText(){
        return this.txt;
    }

    public getName(){
        return this.name;
    }

    public getSrc(){
        return this.src;
    }

    public isDialog(){
        return this.dialog;
    }
}
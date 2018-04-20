import { LogoVals } from "./LogoVals";

export class Player {
    private progress: number;
    private hasBeard: boolean;
    private hasBodyHair: boolean;
    private logo: number;
    private hasStatusChanged: boolean;
    private embracement: number;

    public constructor(){
        this.progress = 0;
        this.embracement = 0;
        this.hasBeard = false;
        this.hasBodyHair = false;
        this.hasStatusChanged = false;
        this.logo = LogoVals.NoneLogo;
    }

    public getStage(){
        if (this.progress > 5 && this.progress <= 10) {
            return 2;
        } else if (this.progress > 10 && this.progress <= 15) {
            return 3;
        } else if (this.progress > 15 && this.progress <= 20) {
            return 4;
        } else if (this.progress > 20 && this.progress <= 25) {
            return 5;
        } else if (this.progress > 25 && this.progress <= 30) {
            return 6;
        } else if (this.progress > 30 && this.progress <= 35) {
            return 7;
        } else if (this.progress > 35 && this.progress <= 40) {
            return 8;
        } else if (this.progress > 40 && this.progress <= 45) {
            return 9;
        } else if (this.progress > 45 && this.progress <= 50) {
            return 10;
        } else if (this.progress > 50 && this.progress <= 55) {
            return 11;
        } else if (this.progress > 55 && this.progress <= 60) {
            return 12;
        } else if (this.progress > 60 && this.progress <= 65) {
            return 13;
        } else if (this.progress > 65 && this.progress <= 70) {
            return 14;
        } else if (this.progress > 70 && this.progress <= 77) {
            return 15;
        } else if (this.progress > 77 && this.progress <= 83) {
            return 16;
        } else if (this.progress > 83 && this.progress <= 88) {
            return 17;
        } else if (this.progress > 88 && this.progress <= 94) {
            return 18;
        } else if (this.progress > 94 && this.progress <= 99) {
            return 19;
        } else if (this.progress >= 100) {
            return 20;
        } else {
            return 1;
        }
    }

    public growBeard(){
        this.hasBeard = true;
    }

    public growBodyHair(){
        this.hasBeard = true;
    }

    public getBeardStatus(){
        return this.hasBeard;
    }

    public getBodyHairStatus(){
        return this.hasBodyHair;
    }

    public getProgress(){
        return this.progress;
    }

    public getLogo(){
        switch (this.logo){
            case LogoVals.Pokeballs:
                return "pokeball.png";
            default:
                return "";
        }
    }

    public setLogo(logo: number){
        if (this.logo == LogoVals.NoneLogo){
            this.logo = logo;
        }
    }

    public hasLogo(){
        return (this.logo != LogoVals.NoneLogo);
    }

    public progressTransformation(i: number){
        var oldStage, newStage;
        oldStage = this.getStage();
        if(this.progress + i <= 100){
            this.progress += i;
        } else {
            this.progress = 100;
        }
        newStage = this.getStage();
        if (newStage != oldStage){
            this.hasStatusChanged = true;
        }
    }

    public seenChanges(){
        this.hasStatusChanged = false;
    }
}
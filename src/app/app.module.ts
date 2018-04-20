import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { IntractableComponent } from './intractable/intractable.component';
import { ActionsComponent } from './actions/actions.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { ScrolltobottomDirective } from './scrolltobottom.directive';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TextAreaComponent,
    IntractableComponent,
    ActionsComponent,
    InventoriesComponent,
    ScrolltobottomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

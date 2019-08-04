import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LastCommandComponent } from './last-command.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { ResizeComponent } from './resize-component';
import { SidebarComponent } from './sidebar-component';
import { ValHotkeysService } from './hotkeys/hotkeys.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HotkeyModule.forRoot() ],
  declarations: [ AppComponent, LastCommandComponent, ResizeComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ValHotkeysService ]
})
export class AppModule { }

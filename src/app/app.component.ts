import { Component } from '@angular/core';

import { HotKeyCommandEvent, HotKeyCommand } from './hotkeys/hotkeys.model';
import { HotKeysCommand } from './hotkeys/hotkeys-command.constants';
import { ValHotKeysListener } from './hotkeys/hotkeys.decorator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

	constructor() {	}

  @ValHotKeysListener()
  onValHotkey(event: HotKeyCommandEvent) {

      switch (event.command) {
        case HotKeysCommand.General.UserMenu.Open: {
          /* RUN ACTION*/
          return true;
        }
        case HotKeysCommand.General.Commmon.AddNewItem: {
          /* RUN ACTION*/
          return true;
        }
        case HotKeysCommand.General.Commmon.DeleteItem: {
          /* RUN ACTION*/
          return true;
        } 
        case HotKeysCommand.General.Commmon.FullScreen: {
          /* RUN ACTION*/
          return true;
        }

        default: return false;
      }

    }
}

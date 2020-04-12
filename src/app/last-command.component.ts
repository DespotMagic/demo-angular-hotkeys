import { Component } from '@angular/core';

import { HotKeyCommandEvent } from './hotkeys/hotkeys.model';
import { HotKeysCommand } from './hotkeys/hotkeys-command.constants';
import { ValHotKeysListener } from './hotkeys/hotkeys.decorator';

@Component({
  selector: 'last-command',
  template: `<div>
    <ul>
      <li *ngFor="let command of commands">{{command}}</li>
    </ul>
  </div>`
})
export class LastCommandComponent  {
  commands: string[] = [];

  @ValHotKeysListener()
	onHotkey(event: HotKeyCommandEvent) {

    if(event.command === HotKeysCommand.TestComponent.LastCommands.Clear) {
      this.commands = [this.timeNow + ' - ' + event.command];
      return true;
    }

    this.commands.push(this.timeNow + ' - ' + event.command);
	}

  get timeNow() {
    return (new Date()).toLocaleTimeString();
  }
}

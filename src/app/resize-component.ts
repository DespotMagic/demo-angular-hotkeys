
import { Component, HostBinding } from '@angular/core';

import { HotKeyCommandEvent } from './hotkeys/hotkeys.model';
import { HotKeysCommand } from './hotkeys/hotkeys-command.constants';
import { ValHotKeysListener } from './hotkeys/hotkeys.decorator';

@Component({
	selector: 'resize-component',
	templateUrl: './resize-component.html',
	styleUrls: ['resize-component.css']
})
export class ResizeComponent {

	@HostBinding('style.width.px')
	width = 50;

	@HostBinding('style.height.px')
  @HostBinding('style.line-height.px')
	height = 50;

  private readonly minWidth = 50;
  private readonly minHeight = 50;

	constructor() {	}

  @ValHotKeysListener()
	onHotkey(event: HotKeyCommandEvent) {

		switch (event.command) {
			case HotKeysCommand.General.Resize.IncreaseSize: {
        this.resize(20);
        return true;
			}
			case HotKeysCommand.General.Resize.DecreaseSize: {
        this.resize(-20);
				return true;
			}
  		default: return false;
		}
	}

  private resize(step) {
    this.width = Math.max(this.minWidth, this.width + step);
    this.height = Math.max(this.minHeight, this.height + step);
  }

}


import { Component, HostBinding } from '@angular/core';

import { HotKeyCommandEvent } from './hotkeys/hotkeys.model';
import { HotKeysCommand } from './hotkeys/hotkeys-command.constants';
import { ValHotKeysListener } from './hotkeys/hotkeys.decorator';

@Component({
	selector: 'sidebar',
	templateUrl: './sidebar-component.html',
	styleUrls: ['sidebar-component.css']
})
export class SidebarComponent {

  @HostBinding('class.expand')
  sidebarExpanded = true;

  menu = ['Menu Item 1', 'Menu Item 2', 'Ctrl + B', 'Ctrl + Up Arrow', 'Ctrl + Down Arrow'];
  activeIndex = 0;

	constructor() {	}

  @ValHotKeysListener()
	onHotkey(event: HotKeyCommandEvent) {

		switch (event.command) {
			case HotKeysCommand.General.Sidebar.NavigationDown: {
        this.activeIndex = Math.min(this.activeIndex+1, this.menu.length-1);
        return true;
			}
			case HotKeysCommand.General.Sidebar.NavigationUp: {
        this.activeIndex = Math.max(this.activeIndex-1, 0);
				return true;
			}
  		default: return false;
		}
	}

	@ValHotKeysListener(HotKeysCommand.General.Sidebar.CollapseExpand)
  collapseExpandSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }
}

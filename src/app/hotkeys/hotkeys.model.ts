import { HotKeysCommand } from './hotkeys-command.constants';
import { OnInit, OnDestroy } from '@angular/core';

export type HotKeyCommand =
	HotKeysCommand.General.UserMenu |
	HotKeysCommand.General.Sidebar |
	HotKeysCommand.General.Commmon |
  HotKeysCommand.General.Resize |
	HotKeysCommand.General.Report |
  HotKeysCommand.TestComponent.LastCommands;

export type HotKeysCombo = {[key in HotKeyCommand]: string | string[]};

export class HotKeyCommandEvent {
	command: HotKeyCommand;
	commandParams?: any;
	event: KeyboardEvent;

	constructor(command: HotKeyCommand, event: KeyboardEvent = null) {
		this.command = command;
		this.event = event;
	}

	commandIsProcessed() {
		this.event.preventDefault();
	}
}
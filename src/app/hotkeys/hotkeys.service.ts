import { Injectable, NgZone } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { Subject ,  BehaviorSubject } from 'rxjs';
import { isArray } from 'lodash';
import  * as HorKeyCombination  from './hotkeys-combination.constants';

import { HotKeyCommand, HotKeyCommandEvent, HotKeysCombo } from './hotkeys.model';

type KeyWithCommands = Array<HotKeyCommand[]>;

@Injectable({ 
  providedIn: 'root'
})
export class ValHotkeysService {

	commands: Subject<HotKeyCommandEvent>;

	static instance: BehaviorSubject<ValHotkeysService>;

	constructor(
		private hotkeysService: HotkeysService,
    private ngZone: NgZone
	) {
	  this.commands = new Subject();
		this.initHotKeysCombo();
	}

	private initHotKeysCombo() {

		const keyWithCommands = this.getKeyWithCommands(HorKeyCombination.hotKeysCombination);

		for (const combo in keyWithCommands) {
			if (keyWithCommands.hasOwnProperty(combo)) {
				const commands: HotKeyCommand[] = keyWithCommands[combo];

				const allowIn = HorKeyCombination.allowedInputCombination.indexOf(combo) >= 0 ? ['input'] : null;

				const hotKey = new Hotkey(combo, (event) => this.onHotKey(commands, event), allowIn);
				this.hotkeysService.add(hotKey);
			}
		}
	}

	private onHotKey(commands: HotKeyCommand[], event: KeyboardEvent): boolean {

		commands.forEach(command => {
			const hotKeyCommandEvent = new HotKeyCommandEvent(command, event);
      this.ngZone.run(() => { this.commands.next(hotKeyCommandEvent); });

      //AngularJS support
			//this.rootScopeService.broadcast(globalEvents.hotKeyCommand, hotKeyCommandEvent);
		});

		return true;
	}

	private getKeyWithCommands(hotKeysCombination: HotKeysCombo): KeyWithCommands {

		const keyWithCommands: KeyWithCommands = [];

		for (const command in hotKeysCombination) {
			if (hotKeysCombination.hasOwnProperty(command)) {
				let keyCombinations: string | string[] = hotKeysCombination[command];

				if (!isArray(keyCombinations)) {
					keyCombinations = [keyCombinations] as string[];
				}

				(keyCombinations as string[]).forEach((combo) => {
					if (!keyWithCommands[combo]) {
						keyWithCommands[combo] = [];
					}
					keyWithCommands[combo].push(command);
				});
			}
		}

		return keyWithCommands;
	}

}

import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isArray } from 'lodash';

import { ValHotkeysService } from './hotkeys.service';
import { HotKeyCommand } from './hotkeys.model';

export function ValHotKeysListener(command?: HotKeyCommand | HotKeyCommand[]): MethodDecorator {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

		if (descriptor === undefined) {
			descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
		}

		subscribeHotkeys(target, descriptor.value, command);

		return descriptor;
	};
}

function subscribeHotkeys(target: any, callback, commandFilter?: HotKeyCommand | HotKeyCommand[]) {

	const originalNgOnInit = (<OnInit>target).ngOnInit;
	const originalNgOnDestroy = (<OnDestroy>target).ngOnDestroy;

	let subscription: Subscription = null;

	(<OnInit>target).ngOnInit = function (...args) {

		originalNgOnInit && originalNgOnInit.apply(this, args);

		getValHotkeysService().then((valHotkeysService) => {

			subscription = valHotkeysService.commands.subscribe((event) => {
				if (commandFilter) {
					const commandList = isArray(commandFilter) ? commandFilter as HotKeyCommand[] : [commandFilter as HotKeyCommand];

					if (!commandList.find((comand) => comand === event.command)) {
						return;
					}
				}

				const commandIsProcessed = callback.call(this, event);
				if (commandIsProcessed) {
					event.commandIsProcessed();
				}
			});

		}).catch(() => { });
	};

	(<OnDestroy>target).ngOnDestroy = function (...args) {

		originalNgOnDestroy && originalNgOnDestroy.apply(this, args);

		if (subscription) {
			subscription.unsubscribe();
		}
	};
}

function getValHotkeysService(): Promise<ValHotkeysService> {
	if (!ValHotkeysService.instance) {
		return Promise.reject('ValHotkeysService instance doesn\'t exist!');
	}

  	return new Promise(resolve => {
		ValHotkeysService.instance.pipe(filter(instance => !!instance)).subscribe(service => {
			resolve(service);
		});
	});

}

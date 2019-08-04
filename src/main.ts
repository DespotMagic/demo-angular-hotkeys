import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BehaviorSubject } from 'rxjs';
import { ValHotkeysService } from './app/hotkeys/hotkeys.service';

ValHotkeysService.instance = new BehaviorSubject<ValHotkeysService>(null);

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
  
  let service = ref.injector.get(ValHotkeysService);
  ValHotkeysService.instance.next(service);

  // Otherwise, log the boot error
}).catch(err => console.error(err));
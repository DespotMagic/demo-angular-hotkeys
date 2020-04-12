import { Component, ViewChild, ElementRef } from "@angular/core";

import { HotKeyCommandEvent, HotKeyCommand } from "./hotkeys/hotkeys.model";
import { HotKeysCommand } from "./hotkeys/hotkeys-command.constants";
import { ValHotKeysListener } from "./hotkeys/hotkeys.decorator";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("bodyContent", { static: false })
  bodyContent: ElementRef;

  items = [1];

  constructor() {}

  @ValHotKeysListener()
  onValHotkey(event: HotKeyCommandEvent) {
    switch (event.command) {
      case HotKeysCommand.General.UserMenu.Open: {
        /* RUN ACTION*/
        return true;
      }
      case HotKeysCommand.General.Commmon.AddNewItem: {
        this.changeItemsCount(1);
        return true;
      }
      case HotKeysCommand.General.Commmon.DeleteItem: {
        this.changeItemsCount(-1);
        return true;
      }
      case HotKeysCommand.General.Commmon.FullScreen: {
        this.toggleFullScreen();
        return true;
      }

      default:
        return false;
    }
  }

  private changeItemsCount(increase: number) {
    this.items.length = Math.max(this.items.length + increase, 1);
  }

  private toggleFullScreen() {
    console.log(this.bodyContent);

    if (!document.fullscreenElement) {
      (this.bodyContent.nativeElement as HTMLDivElement).requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}

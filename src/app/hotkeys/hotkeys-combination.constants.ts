import { HotKeysCombo } from './hotkeys.model';
import { HotKeysCommand } from './hotkeys-command.constants';

//mod - cross platform shortcuts. On Mac - 'command'. on Windows and Linux - 'ctrl'
//For modifier keys you can use shift, ctrl, alt, or meta.

//You can substitute option for alt and command for meta.

//Other special keys are backspace, tab, enter, return, capslock, esc, escape, space, pageup, pagedown, end, home, left, up, right, down, ins, del, and plus.

export const hotKeysCombination: HotKeysCombo = {

	[HotKeysCommand.General.Sidebar.CollapseExpand]: 'mod+b',
	[HotKeysCommand.General.Sidebar.NavigationUp]: 'mod+up',
	[HotKeysCommand.General.Sidebar.NavigationDown]: 'mod+down',

	[HotKeysCommand.General.Resize.IncreaseSize]: 'mod++',
	[HotKeysCommand.General.Resize.DecreaseSize]: 'mod+-',

	[HotKeysCommand.General.UserMenu.Open]: 'alt+u',

	[HotKeysCommand.General.Commmon.AddNewItem]: 'alt+a',
	[HotKeysCommand.General.Commmon.DeleteItem]: 'alt+d',
	[HotKeysCommand.General.Commmon.FullScreen]: 'alt+f',

	[HotKeysCommand.General.Report.ExpandCollapseTree]: 'mod+shift+b',
	[HotKeysCommand.General.Report.ExportExcel]: 'mod+shift+e',
	[HotKeysCommand.General.Report.ExportPDF]: 'mod+shift+p',
	[HotKeysCommand.General.Report.Share]: 'mod+shift+s',

    [HotKeysCommand.TestComponent.LastCommands.Clear]: 'mod+e'
};

export const allowedInputCombination = [];
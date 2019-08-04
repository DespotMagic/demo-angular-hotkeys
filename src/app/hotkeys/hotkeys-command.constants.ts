export namespace HotKeysCommand {

	export namespace General {

		export enum Sidebar {
			CollapseExpand = 'General.Sidebar: Collapse/ Expand bar',
			NavigationUp = 'General.Sidebar: Sidebar Navigation Up',
			NavigationDown = 'General.Sidebar: Sidebar Navigation Down'
		}

		export enum UserMenu {
			Open = 'General.UserMenu: Open User Menu'
		}
    
		export enum Commmon {
			AddNewItem = 'General.Commmon: Add item',
			DeleteItem = 'General.Commmon: Delete item',
			FullScreen = 'General.Commmon: Expand/Collapse full screen'
		}

		export enum Resize {
			IncreaseSize = 'General.Resize: Increase Size',
			DecreaseSize = 'General.Resize: Decrease Size'
		}

		export enum Report {
			ExpandCollapseTree = 'General.Report: Expand/Collapse all',
			ExportExcel = 'General.Report: Export Excel',
			ExportPDF = 'General.Report: Export PDF',
			Share = 'General.Report: Share'
		}
	}

  export namespace TestComponent { 

    export enum LastCommands {
      Clear = 'General.LastCommands: Clear'
    }

  }
}

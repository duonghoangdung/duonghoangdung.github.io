export type SidebarMenuItemType = {
	link: string;
	text: string;
	icon?: string;
	isSubMenu?: boolean,
	children?: Array<SidebarMenuItemType>;
}
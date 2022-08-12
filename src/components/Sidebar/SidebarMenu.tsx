import React from 'react';
import SidebarMenuItem from '../SidebarMenuItem';
import { SidebarMenuItemType } from '../SidebarMenuItem/types';

interface Props {
	menu: Array<SidebarMenuItemType>;
}

const SidebarMenu: React.FC<Props> = ({ menu, ...props }) => {
	return (
		<ul className="text-sm font-semibold" {...props}>
			{menu.map((menuItem, index) => (
				<SidebarMenuItem {...menuItem} key={index}/>
			))}
		</ul>
	);
};

export default SidebarMenu;

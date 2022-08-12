export enum SidebarActionKind {
	TOGGLE = 'TOGGLE',
}

interface ActionType {
	type: SidebarActionKind;
	payload?: number;
}

interface StateType {
	active: boolean;
}

export const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case SidebarActionKind.TOGGLE:
			return {
				...state,
				active: !state.active,
			};
		default:
			return state;
	}
};
export type { StateType, ActionType };
export const initialState = {
	active: false,
};

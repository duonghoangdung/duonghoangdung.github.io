import React, { createContext, FC, useReducer } from 'react'
import { reducer, initialState, StateType, ActionType } from './reducer'

interface SidebarContextInterface {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}

export const SidebarContext = createContext<SidebarContextInterface>({
  state: initialState,
  dispatch: () => null
})

interface Props {
    children?: React.ReactNode
}

export const SidebarProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
    	{ children }
    </SidebarContext.Provider>
  )
}
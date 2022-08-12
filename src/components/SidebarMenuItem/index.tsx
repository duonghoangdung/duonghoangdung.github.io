import React, { useState, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import SVGIcon from '../SVGIcon'
import { SidebarMenuItemType } from './types'
import { NavLink } from 'react-router-dom'
import { SidebarContext } from '../Sidebar/context'
import { SidebarActionKind } from '../Sidebar/reducer'

const SidebarMenuItem: React.FC<SidebarMenuItemType> = ({
  text,
  link,
  icon,
  children,
  isSubMenu,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false)
  const { dispatch } = useContext(SidebarContext)
  return (
    <li className={`${isSubMenu ? 'pl-4 pb-2' : 'mb-2'}`} {...props}>
      <NavLink
        className={(props) => {
          return `${
            props.isActive
              ? 'flex items-center text-[#1a1d1f] bg-[#efefef] p-3 w-full rounded-xl transition shadow-[inset_0_-2px_1px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)]'
              : 'flex items-center text-[#6f767e] bg-transparent p-3 w-full rounded-xl transition hover:text-[#1a1d1f] hover:bg-[#efefef] hover:shadow-[inset_0_-2px_1px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)]'
          }`
        }}
        to={link}
        title={text}
        onClick={(e) => {
          if (children) {
            e.preventDefault()
            setIsActive(!isActive)
          } else {
            dispatch({ type: SidebarActionKind.TOGGLE })
          }
        }}
      >
        {!isSubMenu && icon && <SVGIcon name={icon} w={24} h={24} className='mr-4' />}
        <span className='grow'>{text}</span>
        {children && (
          <SVGIcon
            name='arrow-right'
            w={24}
            h={24}
            className={`ml-auto mr-0 transition ease-in-out duration-300 ${
              isActive && 'rotate-90'
            }`}
          />
        )}
      </NavLink>
      {children && (
        <CSSTransition in={isActive} timeout={300} classNames='slide-x' unmountOnExit>
          <ul className='pl-7 pt-2 sub-menu'>
            {children.map((menuItem, index) => (
              <SidebarMenuItem {...menuItem} isSubMenu={true} key={index} />
            ))}
          </ul>
        </CSSTransition>
      )}
    </li>
  )
}
export type { SidebarMenuItemType }
export default SidebarMenuItem

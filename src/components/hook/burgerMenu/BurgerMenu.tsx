import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import "./style.css"
import Navbar from '@/components/design/navbar/Navbar'

const navList = [
  {
    title : "Menu",
    id : "menu"
  },
  {
    title : "Team",
    id : "team"
  },
  {
    title : "Events",
    id : "events"
  },
  {
    title : "Contact",
    id : "contact"
  },

]

export default function BurgerMenu() {
  return (
    <Menu >
      <Navbar navList={navList} format='column'/>
    </Menu>
  )
}

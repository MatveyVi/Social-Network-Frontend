import React from 'react'
import { NavButton } from '../nav-button'
import { BsPostcard } from 'react-icons/bs'

export const NavBar = () => {
  return (
    <nav>
        <ul className="flex flex-col gap-5">
            <li>
                <NavButton href='/' icon={<BsPostcard />}>
                  Посты 
                </NavButton>
            </li>
            <li>
                <NavButton href='/' icon={<BsPostcard />}>
                  Посты 
                </NavButton>
            </li>
            <li>
                <NavButton href='/' icon={<BsPostcard />}>
                  Посты 
                </NavButton>
            </li>
        </ul>
    </nav>
  )
}

import React from 'react'
import { NavButton } from '../nav-button'

export const NavBar = () => {
  return (
    <nav>
        <ul className="flex flex-col gap-5">
            <li>
                <NavButton />
            </li>
        </ul>
    </nav>
  )
}

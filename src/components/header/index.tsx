import React, { useContext } from 'react'
import { ThemeContext } from '../theme-provider'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import { FaRegMoon } from 'react-icons/fa'
import { LuSunMedium } from 'react-icons/lu'

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
    <Navbar>
        <NavbarBrand>
            <p className="font-bold text-inherit">Network Social</p>
        </NavbarBrand>
        <NavbarContent justify='end'>
            <NavbarItem
             className='lg:flex text-3xl cursor-pointer'
             onClick={() => toggleTheme()}
             >
                { theme === 'light' ? <FaRegMoon /> : <LuSunMedium />}
            </NavbarItem>
            <NavbarItem>
                
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

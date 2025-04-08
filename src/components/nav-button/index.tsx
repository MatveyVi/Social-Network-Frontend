import React, { JSX } from 'react'
import { Button } from '../button';
import { Link } from 'react-router-dom';


type Props = {
  children: React.ReactNode;
  icon: JSX.Element;
  href: string;
}

export const NavButton: React.FC<Props> = ({
  children, 
  icon,
  href
}) => {
  return (
    <Button className='flex justify-start text-xl' icon={icon}>
      <Link to={href}>
        {children}
      </Link>
    </Button>
  )
}

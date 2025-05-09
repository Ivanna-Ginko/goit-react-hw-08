import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'




const Header = () => {
  return (
    <nav className={css.box}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Log in</NavLink>

    </nav>

  )
}

export default Header
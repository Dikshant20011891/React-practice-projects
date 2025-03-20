import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'
import { NavStyle } from './NavStyle'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const ResponsiveNav = () => {
    const [showElements, setShowElements] = useState({
        navbarNav: true,
        hamburgerIcon: false,
        closeIcon: false,
        navOpened: false,
    })
    const [pageTitle, setPageTitle] = useState("")

    const openNav = () => {
        setShowElements({
            navbarNav: true,
            hamburgerIcon: false,
            closeIcon: true,
            navOpened: true,
        })
    }

    const closeNav = () => {
        setShowElements({
            navbarNav: false,
            hamburgerIcon: true,
            closeIcon: false,
            navOpened: false,
        })
    }

    useEffect(() => {
        // window.onresize a event handler triggered when the window is resized 
        window.onresize = () => {
            let windowWidth = window.innerWidth
            // console.log(windowWidth)

            windowWidth > 600 && setShowElements({
                navbarNav: true,
                hamburgerIcon: false,
            })
            windowWidth < 600 && setShowElements({
                navbarNav: false,
                hamburgerIcon: true,
            })
        }
    })

    const handleActive = (e) => {
        let navLinks = document.querySelectorAll('.nav-link')
        navLinks.forEach((link) => {
            link.classList.remove('active')
        })
        e.target.classList.add('active')
        setPageTitle(e.target.innerText)
    }

  return (
    <>
        <NavStyle className={`navbar bg-primary text-light ${showElements.navOpened && "showNavbar"}`}>
        <div className="navbar-logo">
            <a href="#" className='navbar-brand'>
                LOGO
            </a>
            {showElements.hamburgerIcon && <AiOutlineMenu onClick={openNav}/>}{" "}
            {showElements.closeIcon && <AiOutlineClose onClick={closeNav}/>}
        </div>
        <div className="navbar-collapse">
            {showElements.navbarNav ? <ul className={`navbar-items ${showElements.navOpened && "showNavbar"}`}>
                <NavItem text={"home"} active="active" onClick={handleActive}/>
                <NavItem text={"About"} onClick={handleActive}/>
                <NavItem text={"Contact"} onClick={handleActive}/>
            </ul> : null}
        </div>
        </NavStyle>
        <h1 className='title text-center text-primary'>
            {!pageTitle ? "Home" : pageTitle}
        </h1>
    </>
  )
}

export default ResponsiveNav

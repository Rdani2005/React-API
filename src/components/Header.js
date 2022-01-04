import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (

        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1>
                    <NavLink to="/React-API" className="text-white nav-link active">
                        API Practice App
                    </NavLink>
                </h1>
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                    <li><NavLink to="/cripto" className={({ isActive }) =>"nav-link " + (isActive ? "active" : "")}>Cripto</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

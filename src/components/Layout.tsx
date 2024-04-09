import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPage from './HeaderPage'
import FooterPage from './FooterPage'

const Layout = () => {
    return (
        <div className='container'>
            <HeaderPage />
            <Outlet />
            <FooterPage />
        </div>
    )
}

export default Layout

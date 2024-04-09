import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"

const LayoutAdmin = () => {
    return (
        <div className='container container-admin'>
            <SidebarAdmin />
            <Outlet />
            <Toaster />
        </div>

    )
}

export default LayoutAdmin

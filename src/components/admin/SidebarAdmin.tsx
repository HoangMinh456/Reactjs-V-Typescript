import React, { useState } from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { Boxes, GalleryHorizontalEnd, LayoutDashboard, Package, PencilRuler, Receipt, Tags, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom';

const SidebarAdmin = () => {
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (text: string) => {
        setActiveItem(text);
    }
    return (
        <Sidebar>
            <Link to={`/admin`}><SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active={activeItem === 'Dashboard'} onItemClick={handleItemClick} /></Link>
            <Link to={`/admin`}><SidebarItem icon={<UserCircle size={20} />} text="Users" active={activeItem === 'Users'} onItemClick={handleItemClick} /></Link>
            <Link to={`/admin/products`}><SidebarItem icon={<Boxes size={20} />} text="Products" active={activeItem === 'Products'} onItemClick={handleItemClick} /></Link>
            <Link to={`/admin/category`}><SidebarItem icon={<GalleryHorizontalEnd size={20} />} text="Category" active={activeItem === 'Category'} onItemClick={handleItemClick} /></Link>
            <Link to={`/admin/tags`}><SidebarItem icon={<Tags size={20} />} text="Tags" active={activeItem === 'Tags'} onItemClick={handleItemClick} /></Link>
            <Link to={`/admin/size`}><SidebarItem icon={<PencilRuler size={20} />} text="Size" active={activeItem === 'Size'} onItemClick={handleItemClick} /></Link>
            <Link to={`/admin/order`}><SidebarItem icon={<Package size={20} />} text="Orders" active={activeItem === 'Orders'} onItemClick={handleItemClick} /></Link>
            <Link to={`/admin`}><SidebarItem icon={<Receipt size={20} />} text="Billings" active={activeItem === 'Billings'} onItemClick={handleItemClick} /></Link>
        </Sidebar>
    )
}

export default SidebarAdmin
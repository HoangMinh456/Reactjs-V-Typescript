import { useEffect, useState } from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { Boxes, GalleryHorizontalEnd, LayoutDashboard, Package, PencilRuler, Tags, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom';

const SidebarAdmin = () => {
    const [activeItem, setActiveItem] = useState('');
    const path = window.location.pathname;
    useEffect(() => {
        setActiveItem(path.split('/')[2]);
    }, [path]);
    return (
        <Sidebar>
            <Link to={`/admin/dashboard`}><SidebarItem icon={<LayoutDashboard size={20} />} text="dashboard" active={activeItem === 'dashboard'} /></Link>
            <Link to={`/admin/user`}><SidebarItem icon={<UserCircle size={20} />} text="user" active={activeItem === 'user'} /></Link>
            <Link to={`/admin/products`}><SidebarItem icon={<Boxes size={20} />} text="products" active={activeItem === 'products'} /></Link>
            <Link to={`/admin/category`}><SidebarItem icon={<GalleryHorizontalEnd size={20} />} text="category" active={activeItem === 'category'} /></Link>
            <Link to={`/admin/tags`}><SidebarItem icon={<Tags size={20} />} text="tags" active={activeItem === 'tags'} /></Link>
            <Link to={`/admin/size`}><SidebarItem icon={<PencilRuler size={20} />} text="size" active={activeItem === 'size'} /></Link>
            <Link to={`/admin/order`}><SidebarItem icon={<Package size={20} />} text="order" active={activeItem === 'order'} /></Link>
            {/* <Link to={`/admin`}><SidebarItem icon={<Receipt size={20} />} text="Billings" active={activeItem === 'Billings'} /></Link> */}
        </Sidebar>
    )
}

export default SidebarAdmin
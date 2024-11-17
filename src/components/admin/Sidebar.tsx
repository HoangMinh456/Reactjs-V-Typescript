import { MoreVertical, ChevronLast, ChevronFirst, AppWindow } from "lucide-react"
import { createContext, useContext, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { AppContext } from "@/context/ProductContextProvider";

const SidebarContext = createContext();

export default function Sidebar({ children }: any) {
    const [expanded, setExpanded] = useState(true)
    const { user }: any = useContext(AppContext)

    return (
        <aside className={expanded ? 'tw-w-1/6 tw-h-screen tw-transition-all tw-z-10' : 'action tw-h-screen tw-transition-all tw-z-10'}>
            <nav className='tw-h-full tw-flex tw-flex-col tw-bg-white tw-border-r tw-shadow-sm'>
                <div className="tw-p-4 tw-pb-2 tw-flex tw-justify-between tw-items-center">
                    <img src="/images/logo.svg" className={`tw-overflow-hidden tw-transition-all ${expanded ? "tw-w-32" : "tw-w-0"}`} alt="" />
                    <button onClick={() => setExpanded((curr) => !curr)} className="tw-p-1.5 tw-rounded-lg tw-bg-gray-50 hover:tw-bg-gray-100" >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                {/* Context.Provider chứa dữ liệu mà bạn muốn chia sẻ với các thành phần con */}
                <SidebarContext.Provider value={{ expanded }}>
                    {/* Chia sẻ dữ liệu expanded = true cho các thành phần con (ở đây là children) */}
                    <ul className="tw-flex-1 tw-px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="tw-border-t tw-flex tw-p-3">
                    <img src="/images/logo.svg" alt="" className="tw-w-10 tw-h-10 tw-rounded-md" />
                    <div className={`tw-flex tw-justify-between tw-items-center tw-overflow-hidden tw-transition-all ${expanded ? "tw-w-52 tw-ml-3" : "tw-w-0"} `} >
                        <div className="tw-leading-4">
                            <h4 className="tw-font-semibold">{user ? user?.name : 'Admin'}</h4>
                            <span className="tw-text-xs tw-text-gray-600">{user ? user?.email : 'Email admin'}</span>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger><MoreVertical size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link to={`/`}>
                                    <DropdownMenuItem className='tw-cursor-pointer'>
                                        <AppWindow className="tw-mr-2 tw-h-4 tw-w-4" />
                                        Web
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </aside >
    )
}

export function SidebarItem({ icon, text, active, alert }: any) {
    // Lấy dữ liệu expanded được chia sẻ bởi phần tử cha SidebarContext
    const { expanded }: any = useContext(SidebarContext);

    return (
        <li className={`tw-relative tw-flex items-center tw-py-2 tw-px-3 tw-my-1 tw-font-medium tw-rounded-md tw-cursor-pointer tw-transition-colors group ${active == true ? "tw-bg-yellow-300 tw-to-gray-5tw-0 tw-text-gray-800" : "hover:tw-bg-yellow-100 tw-text-gray-600"}`}>
            {icon}
            <span className={`tw-overflow-hidden tw-transition-all ${expanded ? "tw-w-52 tw-ml-3" : "tw-w-0"}`} >
                {text}
            </span>
            {alert && (<div className={`tw-absolute tw-right-2 tw-w-2 tw-h-2 tw-rounded tw-bg-yellow-400 ${expanded ? "" : "tw-top-2"}`} />)}

            {!expanded && (<div className={`tw-absolute tw-left-full tw-rounded-md tw-px-2 tw-py-1 tw-ml-6 tw-bg-yellow-300 tw-text-gray-800 tw-text-sm tw-invisible tw-opacity-20 tw-translate-x-3 tw-transition-all group-hover:tw-visible group-hover:tw-opacity-100 group-hover:tw-translate-x-0 `}>
                {text}
            </div>)}
        </li>
    )
}
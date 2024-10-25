import { LuHome } from "react-icons/lu";
import Header from "./header";
import { GrDocumentText } from "react-icons/gr"

//use to get a component
//props
interface SidebarProps {
    children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Header />
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">

                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  bg-[#9B7EBD] text-white min-h-full w-80 p-4">
                    <li className="text-lg  font-bold mb-10">Guda Document Control Software</li>
                    {/* Sidebar content here */}



                    <li className="text-lg"> <a><span><LuHome /></span> Dashboard</a></li>
                    <li className="text-lg"><a><span><GrDocumentText /></span> Documents</a></li>
                </ul>
            </div>
        </div>
    )
}
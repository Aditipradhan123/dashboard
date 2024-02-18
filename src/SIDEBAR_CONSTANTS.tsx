import { BsHouseDoor, BsFillBriefcaseFill, BsGear, BsQuestionCircle} from "react-icons/bs";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { SideNavItem } from "./types/types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: <BsHouseDoor size={20} />
    },
    {
        title: "Project",
        path: "/project",
        icon: <MdOutlineFeaturedPlayList size={20}/>,
        submenu: true,
        subMenuItems: [
            { title: 'All', path: '/project'},
            { title: 'New', path: '/project/new'}
        ],
    },
    {
        title: "Career",
        path: "/career",
        icon: <BsFillBriefcaseFill size={20}/>,
        submenu: true,
        subMenuItems: [
            { title: 'All', path: '/career'},
            { title: 'New', path: '/career/new'}
        ],
    },
    {
        title: "Account",
        path: "/account",
        icon: <BsGear size={20} />
    },
    {
        title: "Help",
        path: "/help",
        icon: <BsQuestionCircle size={20} />
    }
]
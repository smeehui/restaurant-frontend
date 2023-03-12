import {
    faArrowDown,
    faArrowUp,
    faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardIcon = () => (<FontAwesomeIcon icon={faDashboard} />);
const UserManagerIcon = () => <FontAwesomeIcon icon={faDashboard} />;
const IconClosed = () => <FontAwesomeIcon icon={faArrowUp} />;
const IconOpened = () => <FontAwesomeIcon icon={faArrowDown} />;

export const rightNavData = [
    {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: DashboardIcon,
    },
    {
        title: "User management",
        path: "#",
          icon: UserManagerIcon,
          iconClosed: IconClosed,
          iconOpened: IconOpened,
          subMenu: [
            {
                title: "management 1",
                path: "/admin/dashboard",
                icon: DashboardIcon,
            },
            {
                title: "management 2",
                path: "/admin/dashboard",
                icon: DashboardIcon,
            }
          ]
    },
    {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: DashboardIcon,
    },
    {
        title: "Product management",
        path: "#",
          icon: UserManagerIcon,
          iconClosed: IconClosed,
          iconOpened: IconOpened,
          subMenu: [
            {
                title: "management 1",
                path: "/admin/dashboard",
                icon: DashboardIcon,
            },
            {
                title: "management 2",
                path: "/admin/dashboard",
                icon: DashboardIcon,
            }
          ]
    },
];

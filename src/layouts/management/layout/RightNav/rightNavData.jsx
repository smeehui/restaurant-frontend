import {
    faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "~/config";
const { routes } = config;

const DashboardIcon = () => <FontAwesomeIcon icon={faDashboard} />;
const UserManagerIcon = () => <FontAwesomeIcon icon={faDashboard} />;

export const rightNavData = [
    {
        title: "Dashboard",
        path: routes.dashboard,
        icon: DashboardIcon,
    },
    {
        title: "Users",
        path: "#",
        icon: UserManagerIcon,
        subMenu: [
            {
                title: "New user",
                path: routes.newUser,
                icon: DashboardIcon,
            },
            {
                title: "All users",
                path: routes.userManagement,
                icon: DashboardIcon,
            },
        ],
    },
    {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: DashboardIcon,
    },
    {
        title: "Products",
        path: "#",
        icon: UserManagerIcon,
        subMenu: [
            {
                title: "All products",
                path: "/admin/dashboard",
                icon: DashboardIcon,
            },
            {
                title: "All categories",
                path: "/admin/dashboard",
                icon: DashboardIcon,
            },
        ],
    }
];

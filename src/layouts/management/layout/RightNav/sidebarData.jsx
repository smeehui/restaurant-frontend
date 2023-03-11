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

export const sidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: DashboardIcon,
    },
    {
        title: "User managerment",
        path: "/",
          icon: UserManagerIcon,
          iconClosed: IconClosed,
          iconOpened: IconOpened,
    },
];

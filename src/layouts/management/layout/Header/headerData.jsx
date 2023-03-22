import {
    faGear,
    faUser,
    faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const settingIcon = () => <FontAwesomeIcon icon={faGear} />;
const userIcon = () => <FontAwesomeIcon icon={faUser} />;
const logoutIcon = () => <FontAwesomeIcon icon={faDoorClosed} />;

export const userTippyData = [
    {
        title: "Setting",
        icon: settingIcon,
        path: "/admin/setting"
    },
    {
        title: "Profile",
        icon: userIcon,
        path: "/admin/profile"
    },
    {
        title: "Logout",
        type: "footer",
        icon: logoutIcon,
        path: "/logout"
    },
];

import {
    faCalendar,
    faDashboard, faGear, faGears, faHome, faHomeAlt, faUser, faUserFriends, faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "~/config";
const { routes } = config;

const DashboardIcon = () => <FontAwesomeIcon icon={faDashboard} color="#f73486" />;
const UserManagerIcon = () => <FontAwesomeIcon icon={faGear} color="#f73486" />;
const User = () => <FontAwesomeIcon icon={faUser} color="#f73486" />;
const Post = () => <FontAwesomeIcon icon={faCalendar} color="#f73486" />;

export const rightNavData = [
    {
        title: "Dashboard",
        path: routes.dashboard,
        icon: DashboardIcon,
    },
    {
        title: "Quản trị viên",
        path: "#",
        icon: UserManagerIcon,
        subMenu: [
            {
                title: "Thêm mới",
                path: routes.newUser,
            },
            {
                title: "Danh sách",
                path: routes.userManagement,
            },
        ],
    },
    {
        title: "Người dùng",
        path: "#",
        icon: User,
    },
    {
        title: "Bài viết",
        path: "#",
        icon: Post,
        subMenu: [
            {
                title: "Chưa phê duyệt",
                path: routes.PostManagement,
            },
            {
                title: "Đã phê duyệt",
                path: routes.userManagement,
            },
        ],
    },

];

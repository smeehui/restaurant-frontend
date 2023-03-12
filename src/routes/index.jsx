import Dashboard from "~/pages/Dashboard/Dashboard";
import UserManagement from "~/pages/UserManagement/UserManagement";

const publicRoutes = [
    { path: "/", element: Dashboard },
    { path: "/admin/dashboard", element: Dashboard },
    { path: "/admin/manage/user", element: UserManagement },
];

export { publicRoutes };

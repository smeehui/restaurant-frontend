import { config } from "~/config";
import ManagementLayout from "~/layouts/management/layout/ManagementLayout/ManagementLayout"
import Dashboard from "~/pages/Dashboard/Dashboard";
import Report from "~/pages/Report/Report";
import ManageUser from "~/pages/UserManagement/ListUser/ManageUser";
import NewUser from "~/pages/UserManagement/NewUser/NewUser";

const { routes } = config;

const publicRoutes = [
    { path: routes.home, element: Dashboard, layout: ManagementLayout },
    { path: routes.dashboard, element: Dashboard, layout: ManagementLayout },
    {
        path: routes.userManagement,
        element: ManageUser,
        layout: ManagementLayout,
    },
    { path: routes.newUser, element: NewUser, layout: ManagementLayout },
    { path: routes.report, element: Report, layout: ManagementLayout },
];

export { publicRoutes };

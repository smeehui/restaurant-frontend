import MenuContainer from "../Menus/MenuContainer";
import TableContainer from "../Tables/TableContainer";

export const tabsData = [
    [
        {
            title: "Tables",
            key: "tables",
        },
        {
            title: "Menu",
            key: "menu-items",
        },
    ],
    [
        {
            key: "tables",
            content: <TableContainer />,
        },
        {
            key: "menu-items",
            content:<MenuContainer/>,
        },
    ],
];

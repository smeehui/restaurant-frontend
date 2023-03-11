import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "~/App.css";
import DefaultLayout from "./layouts/management/layout/DefaultLayout/DefaultLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css/normalize.css";
import "~/assets/css/GlobalStyles.module.scss";
import { createContext, useState } from "react";

function App() {
    const handleShowSidebar = () => {
        setShowSidebar(!showSideBar);
    };

    return (
        <DefaultLayout>
            <Routers>
                <h3>Admin Page</h3>
            </Routers>
        </DefaultLayout>
    );
}

export default App;

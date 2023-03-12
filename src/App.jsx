import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "~/App.css";
import DefaultLayout from "./layouts/management/layout/DefaultLayout/DefaultLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css/normalize.css";
import "~/assets/css/GlobalStyles.module.scss";
import { createContext, useState } from "react";
import { publicRoutes } from "./routes";

function App() {
    return (
        <Routers>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const { path, element, layout } = route;
                    const Page = element;
                    const Layout = layout != null ? layout : DefaultLayout;
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Routers>
    );
}

export default App;

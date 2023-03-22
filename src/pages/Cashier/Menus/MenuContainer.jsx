import React from "react";
import { Row } from "react-bootstrap";
import { menuData } from "../data/menuData";
import styles from "./MenuContainer.module.scss";
import MenuItem from "./MenuItem";

function MenuContainer() {
    return (
        <Row>
            {menuData.map((item, index) => {
                return <MenuItem key={index} item={item} />;
            })}
        </Row>
    );
}

export default MenuContainer;

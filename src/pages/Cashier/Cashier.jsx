import clsx from "clsx";
import { Col, Container, Row } from "react-bootstrap";
import TabsCustom from "~/components/tabs/TabsCustom";
import { tabsData } from "./data/tabsData";
import styles from "./Cashier.module.scss";
import { tabActionBtns } from "./data/tabActionBtns";

function Cashier() {
    const [titles, contents] = tabsData;
    const actionBtns = tabActionBtns;
    return (
        <Row>
            <Col lg={6} md={12} className={clsx("pt-2", styles["wrapper"])}>
                <TabsCustom titles={titles} contents={contents} />
            </Col>
            <Col lg={6} md={12} className={clsx("pt-2", styles["wrapper"])}>
                <TabsCustom
                    titles={titles}
                    contents={contents}
                    buttons={actionBtns}
                />
            </Col>
        </Row>
    );
}

export default Cashier;

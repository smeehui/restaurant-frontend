import clsx from "clsx";
import { Button } from "react-bootstrap";

import styles from "./Button.module.scss";

function ButtonCustom({ title, size, icon, outline, variant }) {
    // console.log(icon);
    return (
        <Button
            variant
            className={clsx(
                size,
                styles["wrapper"],
                !outline && styles["no-outline"],
            )}
        >
            <div className={clsx(styles["button"])}>
                {title && <p className={styles["text"]}>{title}</p>}
                {icon && <span className={styles["icon"]}>{icon}</span>}
            </div>
        </Button>
    );
}

export default ButtonCustom;

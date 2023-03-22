import clsx from "clsx";
import { forwardRef, useRef } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import styles from "./Button.module.scss";

function ButtonCustom(
    {
        title,
        size,
        icon,
        outline,
        variant,
        onClick,
        className,
        path,
        img,
        iconOnly,
        ...props
    },
    ref,
) {
    const navigate = useNavigate();
    const handleClick = () => {
        if (path) {
            navigate(path);
            return;
        }
        if (onClick) {
            onClick();
        }
    };
    return (
        <Button
            onClick={handleClick}
            variant={variant || "light"}
            ref={ref}
            className={clsx(
                size,
                styles["wrapper"],
                !outline && styles["no-outline"],
                className,
            )}
            {...props}
        >
            <div className={clsx(styles["button"])}>
                {title && <p className={clsx(styles["text"])}>{title}</p>}
                {icon && (
                    <span
                        className={clsx(styles["icon"], {
                            [styles["icon-only"]]: iconOnly,
                        })}
                    >
                        {icon}
                    </span>
                )}
                {img && <Image src={img} className={clsx(styles["image"])} />}
            </div>
        </Button>
    );
}

export default forwardRef(ButtonCustom);

import Tippy from "@tippyjs/react";
import clsx from "clsx";
import "tippy.js/animations/scale.css";
import styles from "./TippyCustom.module.scss";
import TippyItem from "./TippyItem";

function TippyCustom(props) {
    const { children, items, variants } = props;
    const handleRender = (attrs) => {
        return (
            <div {...attrs} className={clsx(styles["box"])} tabIndex="-1">
                {items.map((item, index) => (
                    <TippyItem
                        key={index}
                        type={item.type}
                        title={item.title}
                        icon={item.icon}
                        path={item.path   }
                    />
                ))}
            </div>
        );
    };
    const handleHide = async (instance) => {
         requestAnimationFrame(instance.unmount)
    };
    return (
        <Tippy
            interactive={true}
            interactiveBorder={20}
            delay={100}
            render={(attrs) => handleRender(attrs)}
            arrow="true"
            {...variants}
            onHide={(instance) => {
               handleHide(instance)
            }}
        >
            {children}
        </Tippy>
    );
}

export default TippyCustom;

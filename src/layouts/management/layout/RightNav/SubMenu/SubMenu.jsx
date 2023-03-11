import { Link } from "react-router-dom";

function SubMenu({ item }) {
   const {path,title,icon} = item;
    return (
        <>
            <Link to={path} className={clsx(styles["wrapper"])}>
                <div className={clsx(styles["item-body"])}>
                    {title && <p className={styles["text"]}>{title}</p>}
                    {icon && <span className={styles["icon"]}>{icon}</span>}
                </div>
            </Link>
        </>
    );
}

export default SubMenu;

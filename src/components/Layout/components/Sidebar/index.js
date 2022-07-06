import clsx from "clsx";
import styles from "./Sidebar.module.scss";

function Sidebar() {
    return (
        <aside className={clsx(styles.wrapper)}>
            <h1>Sidebar</h1>
        </aside>
    );
}

export default Sidebar;

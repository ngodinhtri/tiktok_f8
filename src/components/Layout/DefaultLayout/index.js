import clsx from "clsx";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={clsx(styles.main)}>
                <div className={clsx(styles.container)}>
                    <Sidebar />
                    <div className={clsx(styles.content)}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

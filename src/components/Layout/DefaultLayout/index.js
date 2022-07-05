import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function DefaultLayout({ children }) {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className="main">
                <aside>
                    <Sidebar />
                </aside>
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;

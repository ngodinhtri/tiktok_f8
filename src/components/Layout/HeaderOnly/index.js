import Header from "../components/Header";
function DefaultLayout({ children }) {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className="main">
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;

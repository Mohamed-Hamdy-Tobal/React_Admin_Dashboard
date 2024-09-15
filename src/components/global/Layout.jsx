import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

function Layout() {

    return (
        <div className="app">
            <Sidebar/>
            <main className="content">
                <Topbar />
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;

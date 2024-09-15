import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Box } from "@mui/material";

function Layout() {

    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className="app">
            <Box position="fixed" top='0px' left='0px' zIndex='1000' height='100%' className='sidebar-layout'>
                <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </Box>
            <main className="content" style={{paddingLeft: isCollapsed? "80px": "280px"}}>
                <Topbar />
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;

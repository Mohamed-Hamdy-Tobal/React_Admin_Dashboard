import React from 'react'
import './../styles/Sidebar.css'

const ProSidebar = ({ children, collapsed }) => {
    return (
        <div className={`pro-sidebar ${collapsed && 'collapsed'}`}>
            <div className="pro-sidebar-inner">
                <div className="pro-sidebar-layout">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ProSidebar
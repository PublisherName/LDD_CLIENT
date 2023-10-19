import React from 'react'
import DashboardSidebar from './entiry/DashboardSidebar'
import DashboardTopbar from './entiry/DashboardTopbar'
import DashboardFooter from './entiry/DashboardFooter'
import DashboardBSModel from './entiry/DashboardBSModel'
import DashboardReport from './entiry/DashboardReport'

function DashboardView({ handleLogout }) {
    return (
        <>
            <div id="page-top">
                <div id='wrapper'>
                    <DashboardSidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <DashboardTopbar />
                            <div className="container-fluid">
                                <DashboardReport />
                            </div>
                        </div>
                        <DashboardFooter />
                    </div>
                </div>
                <DashboardBSModel handleLogout={handleLogout} />

            </div>
        </>
    )
}

export default DashboardView
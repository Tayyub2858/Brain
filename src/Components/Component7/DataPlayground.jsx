import React from "react";
import './DataplaygroundStyle.css'
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
const DataPlayground = () => {
    return (
        <>
            <DrawerDasboard componentName={"Data Playground"} />
            <div className="dataplayground-container">
                <h1>Data Playground</h1>
            </div>

        </>
    )
}
export default DataPlayground;
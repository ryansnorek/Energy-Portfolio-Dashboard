import { data } from "../data";
import React, { useState } from "react";
import TopNav from "./TopNav";
import Metrics from "./Metrics";
import Charts from "./Charts";

const Dashboard = () => {
    const [style, setStyle] = useState("");

    return (
        <div className="container">
            <TopNav data={data} style={style} setStyle={setStyle}/>

            <div className="dashboard-content">
                <Metrics data={data} style={style} setStyle={setStyle}/>
                <Charts style={style} setStyle={setStyle}/>                
            </div>
        </div>
    )
};
export default Dashboard;
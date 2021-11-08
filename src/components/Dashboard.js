import { data } from "../data";
import React, { useState } from "react";

const Dashboard = () => {
    const [selection, setSelection] = useState("commercial");
    const [sitesData, setSitesData] = useState("PGE");
    const [performanceData, setPerformanceData] = useState("daily");
    const [style, setStyle] = useState("");

    const handleTopSelection = e => {
        const { value } = e.target;
        setSelection(value);
        setStyle("button-selected");
    };
    const handlePortfolioSelect = e => {
        const { value } = e.target;
        setSitesData(value);
    };
    const handlePerformanceClick = e => {
        const { value } = e.target;
        setPerformanceData(value);
        setStyle("button-selected");
    };
  
    return (
        <div className="container">
            <div className="nav">
                <button className={selection === "commerical" ? style : ""} value="commerical" onClick={handleTopSelection}>Commercial</button>
                <button className={selection === "residential" ? style : ""} value="residential" onClick={handleTopSelection}>Residential</button>
                <div className="dropdown">
                    <form>
                        <div className="portfolios">
                            <p>Portfolios</p>
                            <select onChange={handlePortfolioSelect}>
                                {data.portfolios.map(site => <option>{site}</option>)}
                            </select>
                        </div>
                        <div className="sites">
                            <p>Sites</p>
                            <select>
                                <option>Select All</option>
                                {data.sites[sitesData].map(site => <option>{site}</option>)}
                            </select>
                        </div>
                        <input className="search" placeholder="search"></input>
                    </form>
                </div>
            </div>
            <div className="dashboard-content">
                <div className="metrics-container">
                    <div className="section status">
                        <h3>Status</h3>
                        <p>Total Uptime: 3 years, 40 days</p>
                        <p>Uptime YTD: 169 days, 4 hrs</p>
                        <p>Systems Online: 905</p>
                        <p>Systems Offline: 179</p>
                    </div>
                    <div className="section performance">
                        <h3>Performance</h3>
                        <div>
                            <button className={performanceData === "daily" ? style : ""} value="daily" onClick={handlePerformanceClick}>Daily</button>
                            <button className={performanceData === "monthly" ? style : ""} value="monthly" onClick={handlePerformanceClick}>Monthly</button>
                            <button className={performanceData === "quarterly" ? style : ""} value="quarterly" onClick={handlePerformanceClick}>Quarterly</button>
                            <button className={performanceData === "annually" ? style : ""} value="annually" onClick={handlePerformanceClick}>Annually</button>
                            <button className={performanceData === "alltime" ? style : ""} value="alltime" onClick={handlePerformanceClick}>All-time</button>
                        </div>
                        <p>Estimated/Produced: {data.performance[performanceData].estimated}%</p>
                        <p>Predicted/Produced: {data.performance[performanceData].predicted}%</p>
                        <p>Energy Produced: {data.performance[performanceData].energy.toLocaleString()} kWh</p>
                        <p>Energy Value: ${data.performance[performanceData].dollars.toLocaleString()}</p>
                        <p>Oil Equivalent: {data.performance[performanceData].oil.toLocaleString()} barrels</p>
                        <p>Carbon Equivalent: {data.performance[performanceData].carbon.toLocaleString()} metric tons</p>
                    </div>
                    <div className="section issues">
                        <h3>Issues</h3>
                        <p>Average Resolution Time: 4 days, 20 hrs</p>
                        <p>User Created Issues: 459</p>
                        <p>AI Generated Issues: 347</p>
                        <p>Open Issues Remaining: 69</p>
                    </div>
                </div>
                <div className="charts-container">
                   <img src="../../images/chart.png" alt=""></img>
                </div>
            </div>
            
    </div>
    )
};

export default Dashboard;
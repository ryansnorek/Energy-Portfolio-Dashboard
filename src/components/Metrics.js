import React, { useState } from "react";

const Metrics = props => {
    const { data, style, setStyle } = props;
    const [performanceData, setPerformanceData] = useState("day");

    const handlePerformanceClick = e => {
        setPerformanceData(e.target.value);
        setStyle("button-selected");
    };
    return (
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
                    <button className={performanceData === "day" ? style : ""} value="day" onClick={handlePerformanceClick}>Day</button>
                    <button className={performanceData === "month" ? style : ""} value="month" onClick={handlePerformanceClick}>Month</button>
                    <button className={performanceData === "quarter" ? style : ""} value="quarter" onClick={handlePerformanceClick}>Quarter</button>
                    <button className={performanceData === "year" ? style : ""} value="year" onClick={handlePerformanceClick}>Year</button>
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
    )
};

export default Metrics;
import React, { useState } from "react";

const Charts = props => {
    const { style, setStyle } = props;
    const [selection, setSelection] = useState("chart");
    
    const handleClick = e => {
        setSelection(e.target.value);
        setStyle("button-selected");
    };

    return (
        <div className="charts-container">
            <div>
                <button className={selection === "chart" ? style : ""} onClick={handleClick} value="chart">Chart</button>
                <button className={selection === "satellite" ? style : ""} onClick={handleClick} value="satellite">Satellite</button>
            </div>
            {selection === "chart" ? 
            <img src="../../images/chart.png" alt=""></img> 
            : <img src="../../images/satellite.png" alt=""></img>}
            
        </div>
    )
};

export default Charts;
import React, { useState } from "react";

const TopNav = props => {
    const { data, style, setStyle } = props;
    const [selection, setSelection] = useState("commercial");
    const [sitesData, setSitesData] = useState("PGE");

    const handleTopSelection = e => {
        setSelection(e.target.value);
        setStyle("button-selected");
    };
    const handlePortfolioSelect = e => {
        setSitesData(e.target.value);
    };

    return (
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
    )
};

export default TopNav;
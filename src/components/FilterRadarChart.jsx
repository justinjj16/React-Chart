import React from "react";
import './filterRadarChart.css'
import FilterSlider from "./Slider";

const FilterRadarChart = () => {

    return (
        <div className="flter-radar">
            <div className="filter-Headings">
                <div className="filter-heading-item active">
                    <span>Chart</span>
                </div>
                <div className="filter-heading-item">
                    <span>Quick Guide</span>
                </div>
                <div className="filter-heading-item">
                    <span>Feedback</span>
                </div>
            </div>
            <div className="future-wave-container">
                <div className="future-wave">
                    <span>Future wave (Years)</span>
                </div>
                <div className="filter-pagination">
                    <div className="pagination-all">
                        <span>All</span>
                    </div>
                    <div className="pagination-number">
                        <span>1</span>
                    </div>
                    <div className="pagination-number">
                        <span>2</span>
                    </div>
                    <div className="pagination-number">
                        <span>3</span>
                    </div>
                    <div className="pagination-number">
                        <span>4</span>
                    </div>
                </div>

            </div>
            <div className="filter-year-range">
                <span>Year Range</span>
            </div>
            <div>
                <FilterSlider />
            </div>
        </div>
    )
}

export default FilterRadarChart;
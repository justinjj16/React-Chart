import React from "react";
import './filterRadarChart.css'
import FilterSlider from "./Slider";
import Dropdown from "./Dropdown";

const FilterRadarChart = ({ topics,sectors,regions,pests }) => {

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
            <div className="filer-mesasure flex w-100">
                <div className="filter-side w-50">
                    <h3>Filter</h3>
                    <div>
                        <div>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span >TOPIC</span>
                        </div>
                        <div>
                            <Dropdown options={topics} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span >SECTOR</span>
                        </div>
                        <div>
                            <Dropdown options={sectors} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span >REGION</span>
                        </div>
                        <div>
                            <Dropdown options={regions} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span >PEST</span>
                        </div>
                        <div>
                            <Dropdown options={pests} />
                        </div>
                    </div>

                </div>
                <div className="measure-side w-50">
                    <h3>Measure</h3>
                </div>
            </div>
        </div>
    )
}

export default FilterRadarChart;
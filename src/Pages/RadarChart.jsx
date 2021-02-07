import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { getJsonData } from '../service/chartService';
import './radarChart.css';
import FilterRadarChart from "../components/FilterRadarChart";


const RadarChart = () => {
    const getDataFromDataBase = async () => {
        const res = await getJsonData();
        const sector = [];
        const intensity = [];
        res.length && res.map((item) => {
            sector.push(item.sector)
            intensity.push(item.intensity ? item.intensity : 0);
        });
        setOptions({ ...options, xaxis: { categories: sector } });
        setSeries([{
            name: 'Series 1',
            data: intensity,
        }])
    }
    useEffect(() => {
        getDataFromDataBase();
    }, []);
    const [filterPopupVisible, setFilterPopupVisible] = useState(false);
    const [series, setSeries] = useState([{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }]);
    const [options, setOptions] = useState({
        options: {
            chart: {
                height: 350,
                type: 'radar',
            },
            title: {
                text: 'Basic Radar Chart'
            },
            xaxis: {
                categories: ['January', 'February', 'March', 'April', 'May', 'June']
            },
            labels: ['April', 'May', 'June', 'July', 'August', 'September']
        }
    })
    return (
        <div className="chart radar-chart">
            <div className="radar-chart-container">
                <Chart
                    type='radar'
                    options={options}
                    series={series}
                    height={380} width={'100%'}
                />
            </div>

            <div className="filter-button-container">
                <button onClick={() => setFilterPopupVisible(true)} className="filterButton">
                    <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Filter
                </button>
            </div>
            {filterPopupVisible && (
                <div className="filter-container">
                <FilterRadarChart />
            </div>
            )}
        </div>
    );
}

export default RadarChart;
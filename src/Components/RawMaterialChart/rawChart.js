import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useNavigate } from 'react-router-dom';
import './rawChart.css'

export default function RawMaterialChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [chartData1, setChartData1] = useState({});
    const [chartOptions1,setChartOptions1] = useState({});
    const navigateRawPie = useNavigate();

    useEffect(() => {
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: ['#007BFF','#FFC107','#28A745'], 
                    hoverBackgroundColor: ['#0056b3', '#d39e00', '#218838']
                }
            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        const data1 = {
            labels: ['Si', 'C', 'Cr', 'Ca' ,'Mn'],
            datasets: [
                {
                    data: [540, 325, 202, 500, 400],
                    backgroundColor: ['#ff0000','#ffff4d','#218838','#1a1aff','#ff1aff'], 
                    hoverBackgroundColor: ['#ff0000', '#d39e00', '#218838','#1a1aff','#ff1aff']
                }
            ]
        };
        const options1 = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };
       
        setChartData(data);
        setChartOptions(options);
        setChartData1(data1);
        setChartOptions1(options1)
    }, []);

    const handelBackButton = () =>{
        navigateRawPie(-1)
    }

    return (
    <div className='raw-pie-chart-container'>
        <button className='back-button-chart' onClick={handelBackButton}>Back</button>
        <div className="raw-pie-container">
            <div className='heading-pie-chart-container'>
                <h1 className='inside-head-input'>Customer Name:</h1>
                <h2 className='inside-head-input'>Part-Id:</h2>
                <h2 className='inside-head-input'>Work Order:</h2>
            </div>
            <div className="raw-pie-chart-inside-container">
                <h1 className='pie-chart-head'>INGOT Consumption</h1>
                <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
            </div>
            <div className="raw-pie-chart-inside-container">
                <h1 className='pie-chart-head'>Addition Consumption</h1>
                <Chart type="pie" data={chartData1} options={chartOptions1} className="w-full md:w-30rem" />
            </div>
        </div>
    </div>
    )
}
        
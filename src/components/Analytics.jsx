import React,{useContext} from "react";
import {
    Bar,
    Pie,
} from "react-chartjs-2";
import { FaArrowUp, FaArrowDown, FaBalanceScale } from "react-icons/fa";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

import { AnalyticsContext } from '../context/AnalyticsProvider'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

// const commodityTrendsData= [{"id": 47, "agricultural": "Soybeans USd/Bu", "price": 1042.75, "day": 13.75, "percentage": 1.34, "weekly": 6.73, "monthly": 4.22, "ytd": 4.46, "yoy": -11.1, "date": "Apr/11"}, {"id": 48, "agricultural": "Wheat USd/Bu", "price": 554.5, "day": 16.5, "percentage": 3.07, "weekly": 4.82, "monthly": 0.09, "ytd": 0.54, "yoy": -0.27, "date": "Apr/11"}, {"id": 49, "agricultural": "Lumber USD/1000 board feet", "price": 573.08, "day": 2.5, "percentage": -0.43, "weekly": -3.22, "monthly": -11.5, "ytd": 4.19, "yoy": 6.21, "date": "Apr/11"}, {"id": 50, "agricultural": "Palm Oil MYR/T", "price": 4214.0, "day": 13.0, "percentage": 0.31, "weekly": -2.66, "monthly": -6.13, "ytd": -5.18, "yoy": -1.52, "date": "Apr/11"}, {"id": 51, "agricultural": "Cheese USD/Lbs", "price": 1.753, "day": 0.006, "percentage": -0.34, "weekly": 4.04, "monthly": -1.24, "ytd": -7.79, "yoy": 5.92, "date": "Apr/11"}, {"id": 52, "agricultural": "Milk USD/CWT", "price": 17.22, "day": 0.02, "percentage": -0.12, "weekly": 1.23, "monthly": -7.32, "ytd": -7.96, "yoy": 11.75, "date": "Apr/11"}, {"id": 53, "agricultural": "Rubber USD Cents / Kg", "price": 169.5, "day": 3.9, "percentage": 2.36, "weekly": -6.56, "monthly": -14.09, "ytd": -14.13, "yoy": 4.24, "date": "Apr/11"}, {"id": 54, "agricultural": "Orange Juice USd/Lbs", "price": 279.25, "day": 15.0, "percentage": 5.68, "weekly": 23.07, "monthly": 1.01, "ytd": -43.87, "yoy": -24.04, "date": "Apr/11"}, {"id": 55, "agricultural": "Coffee USd/Lbs", "price": 360.01, "day": 16.86, "percentage": 4.91, "weekly": -1.8, "monthly": -7.88, "ytd": 12.33, "yoy": 61.91, "date": "Apr/11"}, {"id": 56, "agricultural": "Cotton USd/Lbs", "price": 65.835, "day": 0.735, "percentage": -1.1, "weekly": 3.96, "monthly": -1.03, "ytd": -3.7, "yoy": -20.61, "date": "Apr/12"}, {"id": 57, "agricultural": "Rice USD/cwt", "price": 13.51, "day": 0.265, "percentage": 2.0, "weekly": 3.33, "monthly": -2.38, "ytd": -3.67, "yoy": -21.54, "date": "Apr/11"}, {"id": 58, "agricultural": "Canola CAD/T", "price": 659.53, "day": 7.53, "percentage": 1.15, "weekly": 3.49, "monthly": 17.6, "ytd": 8.35, "yoy": 6.43, "date": "Apr/13"}, {"id": 59, "agricultural": "Oat USd/Bu", "price": 343.262, "day": 3.7615, "percentage": 1.11, "weekly": 0.15, "monthly": -6.79, "ytd": 3.86, "yoy": -1.93, "date": "Apr/11"}, {"id": 60, "agricultural": "Wool AUD/100Kg", "price": 1262.0, "day": 0.0, "percentage": 0.0, "weekly": 1.04, "monthly": 3.02, "ytd": 9.36, "yoy": 10.51, "date": "Apr/11"}, {"id": 61, "agricultural": "Sugar USd/Lbs", "price": 17.98, "day": 0.13, "percentage": -0.71, "weekly": -3.65, "monthly": -6.33, "ytd": -6.77, "yoy": -10.12, "date": "Apr/13"}, {"id": 62, "agricultural": "Cocoa USD/T", "price": 8471.57, "day": 335.18, "percentage": 4.12, "weekly": 6.34, "monthly": 0.67, "ytd": -26.35, "yoy": -22.78, "date": "Apr/12"}, {"id": 63, "agricultural": "Tea INR/Kgs", "price": 139.29, "day": 1.66, "percentage": 1.21, "weekly": 1.21, "monthly": -3.24, "ytd": -18.1, "yoy": 20.14, "date": "Mar/15"}, {"id": 64, "agricultural": "Sunflower Oil USD/T", "price": 1314.4, "day": 1.2, "percentage": -0.09, "weekly": -1.61, "monthly": -2.75, "ytd": 3.63, "yoy": 51.01, "date": "Apr/11"}, {"id": 65, "agricultural": "Rapeseed EUR/T", "price": 521.73, "day": 9.48, "percentage": 1.85, "weekly": 0.91, "monthly": 10.2, "ytd": 2.3, "yoy": 13.67, "date": "Apr/11"}, {"id": 66, "agricultural": "Barley INR/T", "price": 2197.0, "day": 7.0, "percentage": 0.32, "weekly": 1.45, "monthly": 4.62, "ytd": -9.38, "yoy": 13.78, "date": "Apr/11"}, {"id": 67, "agricultural": "Butter EUR/T", "price": 7150.0, "day": 50.0, "percentage": 0.7, "weekly": -1.02, "monthly": -4.03, "ytd": -2.07, "yoy": 16.26, "date": "Apr/11"}, {"id": 68, "agricultural": "Potatoes EUR/100KG", "price": 17.5, "day": 0.0, "percentage": 0.0, "weekly": -4.89, "monthly": -18.98, "ytd": -40.07, "yoy": -53.08, "date": "Apr/11"}, {"id": 69, "agricultural": "Corn USd/BU", "price": 489.5, "day": 6.5, "percentage": 1.35, "weekly": 6.36, "monthly": 6.24, "ytd": 6.76, "yoy": 12.4, "date": "Apr/11"}]


const Analytics = () => {
    const { analyticsData,commodityTrendsData, isLoading, isError, error } = useContext(AnalyticsContext);

    console.log("commodityTrendsData:",commodityTrendsData)


    const gainersData = {
        labels: analyticsData.top_gainers?.map((item) => item.agricultural) || [],
        datasets: [
            {
                label: "Top Gainers (%)",
                data: analyticsData.top_gainers?.map((item) => item.percentage) || [],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };
    
    const losersData = {
        labels: analyticsData.top_losers?.map((item) => item.agricultural) || [],
        datasets: [
            {
                label: "Top Losers (%)",
                data: analyticsData.top_losers?.map((item) => item.percentage) || [],
                backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
        ],
    };
    
    const ytdData = {
        labels: ["Positive", "Negative"],
        datasets: [
            {
                label: "YTD",
                data: [
                    analyticsData.ytd?.positive || 0,
                    analyticsData.ytd?.negative || 0
                ],
                backgroundColor: ["#10b981", "#ef4444"],
            },
        ],
    };

    if (!Array.isArray(commodityTrendsData)) {
        return <div>Loading chart data...</div>;
    }
    
    const yoyChartData = {
        labels: commodityTrendsData.map(item => item.agricultural),
        datasets: [
          {
            label: "YoY (%)",
            data: commodityTrendsData.map(item => item.yoy),
            backgroundColor: commodityTrendsData.map(item =>
              item.yoy >= 0 ? "rgba(34,197,94,0.7)" : "rgba(239,68,68,0.7)"
            ),
          },
        ],
      };
    
    
    

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error}</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 space-y-12 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Market Analytics Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow border border-green-200">
                    <div className="flex flex-col items-center">
                        <FaArrowUp className="text-green-500 text-2xl mb-2" />
                        <p className="text-sm text-gray-500">Highest Commodity</p>
                        <p className="font-semibold text-lg text-green-600">
                            {analyticsData.max_price.commodity}
                        </p>
                        <p className="text-green-700 font-bold">${analyticsData.max_price.price}</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                    <div className="flex flex-col items-center">
                        <FaBalanceScale className="text-gray-500 text-2xl mb-2" />
                        <p className="text-sm text-gray-500">Average Price</p>
                        <p className="text-lg font-semibold">${analyticsData.average_price.toFixed(2)}</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border border-red-200">
                    <div className="flex flex-col items-center">
                        <FaArrowDown className="text-red-500 text-2xl mb-2" />
                        <p className="text-sm text-gray-500">Lowest Commodity</p>
                        <p className="font-semibold text-lg text-red-600">
                            {analyticsData.min_price.commodity}
                        </p>
                        <p className="text-red-700 font-bold">${analyticsData.min_price.price}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 shadow rounded-lg h-[350px] flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-center">Top Gainers</h2>
                    <div className="flex-grow">
                        <Bar data={gainersData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>

                <div className="bg-white p-4 shadow rounded-lg h-[350px] flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-center">Top Losers</h2>
                    <div className="flex-grow">
                        <Bar data={losersData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>

                <div className="bg-white p-4 shadow rounded-lg h-[350px] flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-center"> YTD Summary</h2>
                    <div className="flex-grow">
                        <Pie data={ytdData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow mt-8">
                <h2 className="text-2xl font-bold mb-4 text-center"> Year-over-Year Performance</h2>
                <div className="h-[500px] overflow-x-auto">
                    <Bar
                        data={yoyChartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    callbacks: {
                                        label: (ctx) => `${ctx.raw}%`,
                                    },
                                },
                            },
                            scales: {
                                y: {
                                    title: { display: true, text: "% Change" },
                                    ticks: {
                                        callback: function (value) {
                                            return value + "%";
                                        },
                                    },
                                },
                                x: {
                                    ticks: {
                                        callback: function (value, index, ticks) {
                                            const label = commodityTrendsData[index]?.agricultural;
                                            return label.length > 10 ? label.slice(0, 10) + "…" : label;
                                        },
                                        maxRotation: 60,
                                        minRotation: 45,
                                    },
                                },
                            },
                        }}
                    />
                </div>
            </div>

        </div>
    );

};

export default Analytics;

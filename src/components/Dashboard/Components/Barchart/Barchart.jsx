import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Barcharts({ dataa }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let newData;

    switch (dataa) {
      case "2":
        newData = {
          รถสี่ล้อ: [400000, 250000, 200000, 150000, 120000, 90000],
          รถหกล้อ: [180000, 140000, 100000, 80000, 60000, 40000],
          รถแปดล้อ: [220000, 90000, 60000, 50000, 40000, 30000],
          รถสิบล้อ: [350000, 180000, 130000, 100000, 80000, 60000],
        };
        break;
      case "3":
        newData = {
          รถสี่ล้อ: [400000, 300000, 200000, 150000, 130000, 100000],
          รถหกล้อ: [150000, 100000, 80000, 60000, 50000, 40000],
          รถแปดล้อ: [100000, 70000, 60000, 50000, 40000, 30000],
          รถสิบล้อ: [200000, 150000, 100000, 80000, 60000, 50000],
        };
        break;
      case "4":
        newData = {
          รถสี่ล้อ: [350000, 270000, 180000, 130000, 100000, 70000],
          รถหกล้อ: [170000, 130000, 100000, 70000, 50000, 30000],
          รถแปดล้อ: [110000, 80000, 60000, 45000, 35000, 25000],
          รถสิบล้อ: [220000, 180000, 120000, 90000, 70000, 50000],
        };
        break;
      default:
        newData = {
          รถสี่ล้อ: [4749, 4000, 4200, 1640, 1540, 1340],
          รถหกล้อ: [2700, 4500, 1200, 2840, 2730, 2520],
          รถแปดล้อ: [4500, 3000, 2900, 2740, 2620, 2400],
          รถสิบล้อ: [300, 2000, 1500, 1000, 2800, 2600],
        };
        break;
    }

    setChartData([
      { name: "รถสี่ล้อ", data: newData["รถสี่ล้อ"], color: "#7cb5ec" },
      { name: "รถหกล้อ", data: newData["รถหกล้อ"], color: "#434348" },
      { name: "รถแปดล้อ", data: newData["รถแปดล้อ"], color: "#90ed7d" },
      { name: "รถสิบล้อ", data: newData["รถสิบล้อ"], color: "#f7a35c" },
    ]);
  }, [dataa]);

  const options = {
    chart: {
      type: "column",
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
    },
    xAxis: {
      title: {
        text: "ระยะทาง (กิโลเมตร)",
      },
      categories: [
        "1-10 km",
        "11-20 km",
        "21-30 km",
        "31-40 km",
        "41-50 km",
        "51-60 km",
      ],
      crosshair: true,
      accessibility: {
        description: "Distance",
      },
    },
    title: {
      text: "อันดับระยะทางที่ผู้ใช้เรียกมากที่สุด",
      align: "center",
    },
    tooltip: {
      valueSuffix: " คน",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: chartData,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Barcharts;

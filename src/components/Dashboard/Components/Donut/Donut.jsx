import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Donut({ dataa }) {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "ทั้งหมด",
        colorByPoint: true,
        data: [
          { name: "เช้า", y: 3100 },
          { name: "กลางวัน", y: 5150 },
          { name: "เย็น", y: 2204 },
          { name: "กลางคืน", y: 1300 },
        ],
      },
    ],
  });

  useEffect(() => {
    let newData;
    switch (dataa) {
      case "2":
        newData = [
          { name: "เช้า", y: 55000 },
          { name: "กลางวัน", y: 26000 },
          { name: "เย็น", y: 17000 },
          { name: "กลางคืน", y: 7500 },
        ];
        break;
      case "3":
        newData = [
          { name: "เช้า", y: 167000 },
          { name: "กลางวัน", y: 93000 },
          { name: "เย็น", y: 53500 },
          { name: "กลางคืน", y: 10800 },
        ];
        break;
      case "4":
        newData = [
          { name: "เช้า", y: 2312000 },
          { name: "กลางวัน", y: 1258000 },
          { name: "เย็น", y: 556000 },
          { name: "กลางคืน", y: 123500 },
        ];
        break;
      default:
        newData = [
          { name: "เช้า", y: 2100 },
          { name: "กลางวัน", y: 6150 },
          { name: "เย็น", y: 2204 },
          { name: "กลางคืน", y: 1300 },
        ];
        break;
    }

    setChartData({
      series: [
        {
          name: "ทั้งหมด",
          colorByPoint: true,
          data: newData,
        },
      ],
    });
  }, [dataa]);

  const options = {
    title: {
      text: "เวลาที่ผู้ใช้เรียกมากที่สุด",
    },
    chart: {
      type: "pie",
      height: 400,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: " คน",
    },
    plotOptions: {
      pie: {
        size: "70%",
        center: ["50%", "50%"],
      },
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
        ],
      },
    },
    series: chartData.series,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Donut;

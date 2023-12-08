import { ApexOptions } from "apexcharts";
import React from "react";
import CardLayout from "./CardLayout";
import Chart from "react-apexcharts";

const SubmissionsChart = () => {
  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: { curve: "smooth", width: 2 },
    yaxis: {
      show: false,
    },
    grid: {
      borderColor: "#F1F5F9",
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        return `
          <div class="flex flex-col p-3">
            <h6 class="text-xs 2xl:text-sm text-slate-500">Submissions</h6>
            <h6 class="text-sm 2xl:text-base font-semibold text-slate-950">
              ${series[seriesIndex][dataPointIndex]}
            </h6>
          </div>
        `;
      },
    },
    xaxis: {
      crosshairs: {
        stroke: {
          color: "#E2E8F0",
        },
      },
      categories: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          cssClass: "text-[10px] 2xl:text-xs fill-slate-500 uppercase",
        },
      },
    },
  };

  const series = [
    {
      name: "Submissions",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ];
  return (
    <CardLayout className="grow gap-2 flex flex-col">
      <h6 className="text-sm 2xl:text-base text-slate-500">Statistics</h6>
      <div className="grow">
        <Chart
          options={options}
          series={series}
          type="line"
          width="100%"
          height="100%"
        />
      </div>
    </CardLayout>
  );
};

export default SubmissionsChart;

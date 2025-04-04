import React, { act, useState } from "react";
import { CgOrganisation } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { SiAwsorganizations } from "react-icons/si";
import Chart from "react-apexcharts";
import { Outlet } from "react-router-dom";
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState(0);
  const chartOptions = {
    chart: {
      id: "line-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: "dark",
    },
    colors: ["#4F46E5"], // Indigo color
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10  p-3">
      <div className="w-full md:w-[70%] rounded-lg border p-4">
        <div className="flex justify-between items-center">
          <div className="text-[20px] ">Overview</div>{" "}
          <div>
            <select className="p-2 rounded-md">
              <option value="">Monthly</option>
              <option value="">Weekly</option>
              <option value="">Annually</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between bg-[#f5f5f5] p-4 rounded-lg mt-2 ">
          <div
            className={`p-4 rounded-2xl cursor-pointer ltr:text-left rtl:text-right transition duration-150 outline-hidden   w-full md:w-[33%] mt-5 md:mt-2 ${
              activeTab === 0 && "bg-white shadow-md"
            }`}
            onClick={() => {
              setActiveTab(0);
            }}
          >
            <CgOrganisation size={28} />
            <div className="mb-4 text-sm font-semibold text-[#737373] mt-2">
              Total Organizations
            </div>
            <h3 className="mb-1 text-[22px]">
              <span>135</span>
            </h3>
            <div className="inline-flex items-center flex-wrap gap-1">
              <span className="flex items-center text-success font-bold">
                <span>+</span>
                <span>3.4%</span>
              </span>
              <span className="text-[12px]">from last month</span>
            </div>
          </div>

          <div
            className={`p-4 rounded-2xl cursor-pointer ltr:text-left rtl:text-right transition duration-150 outline-hidden   w-full md:w-[33%] mt-5 md:mt-2 ${
              activeTab === 1 && "bg-white shadow-md"
            }`}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            <SiAwsorganizations size={28} />
            <div className="mb-4 text-sm font-semibold text-[#737373] mt-2">
              Active Organizations
            </div>
            <h3 className="mb-1 text-[22px]">
              <span>120</span>
            </h3>
            <div className="inline-flex items-center flex-wrap gap-1">
              <span className="flex items-center text-success font-bold">
                <span>+</span>
                <span>3.4%</span>
              </span>
              <span className="text-[12px]">from last month</span>
            </div>
          </div>

          <div
            className={`p-4 rounded-2xl cursor-pointer ltr:text-left rtl:text-right transition duration-150 outline-hidden   w-full md:w-[33%] mt-5 md:mt-2 ${
              activeTab === 2 && "bg-white shadow-md"
            }`}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            <FaUsers size={28} />
            <div className="mb-4 text-sm font-semibold text-[#737373] mt-2">
              Total Students
            </div>
            <h3 className="mb-1 text-[22px]">
              <span>1200</span>
            </h3>
            <div className="inline-flex items-center flex-wrap gap-1">
              <span className="flex items-center text-success font-bold">
                <span>+</span>
                <span>3.4%</span>
              </span>
              <span className="text-[12px]">from last month</span>
            </div>
          </div>
        </div>{" "}
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={300}
        />
      </div>
      <div className="w-full md:w-[30%] p-4 rounded-lg border"></div>
    </div>
  );
}

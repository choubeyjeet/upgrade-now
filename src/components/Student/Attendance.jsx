import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import dayjs from "dayjs";

const getRandomAttendance = () => {
  const attendance = {};
  for (let i = 1; i <= 31; i++) {
    attendance[i] = Math.random() > 0.2; // 80% Present, 20% Absent
  }
  return attendance;
};

const Attendance = () => {
  const currentYear = dayjs().year();
  const currentMonth = dayjs().month();

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [attendanceData, setAttendanceData] = useState(getRandomAttendance());

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const daysInMonth = dayjs(
    `${selectedYear}-${selectedMonth + 1}-01`
  ).daysInMonth();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Attendance Record</h1>

      {/* Year & Month Selection */}
      <div className="flex gap-4 mb-4">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="p-2 border rounded"
        >
          {[...Array(5)].map((_, index) => (
            <option key={index} value={currentYear - index}>
              {currentYear - index}
            </option>
          ))}
        </select>

        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="p-2 border rounded"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {dayjs().month(i).format("MMMM")}
            </option>
          ))}
        </select>
      </div>

      {/* Attendance Calendar */}
      <div className="grid grid-cols-7 gap-4 text-center bg-white p-4 rounded-lg shadow-md">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isPresent = attendanceData[day];

          return (
            <div
              key={day}
              className="p-2 border rounded-md flex flex-col items-center"
            >
              <span className="font-semibold">{day}</span>
              {isPresent ? (
                <FiCheckCircle className="text-green-500 mt-1" size={20} />
              ) : (
                <FiXCircle className="text-red-500 mt-1" size={20} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;

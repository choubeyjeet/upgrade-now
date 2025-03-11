import React from "react";
import ReactApexChart from "react-apexcharts";

const subjects = ["Math", "Science", "History", "English", "Art"];
const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4"];

const StudentDashboard = () => {
  const getSubjectData = (subject) => {
    return {
      totalQuestions: 50,
      correct: Math.floor(Math.random() * 50),
      incorrect: Math.floor(Math.random() * 50),
    };
  };

  const getOverallPerformance = () => {
    return semesters.map(() => Math.floor(Math.random() * 100));
  };

  const getSubjectSemesterPerformance = () => {
    return subjects.map((subject) => {
      return {
        name: subject,
        data: semesters.map(() => Math.floor(Math.random() * 100)),
      };
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      {/* Overall Performance Chart */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Overall Performance Across Semesters
        </h2>
        <ReactApexChart
          options={{
            chart: { type: "line" },
            xaxis: { categories: semesters },
          }}
          series={[{ name: "Overall Score", data: getOverallPerformance() }]}
          type="line"
          height={300}
        />
      </div>

      {/* Semester-wise Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {semesters.map((semester, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">
              {semester} Performance
            </h2>
            <ReactApexChart
              options={{
                chart: { type: "bar" },
                xaxis: { categories: subjects },
              }}
              series={[
                {
                  name: "Average Score",
                  data: subjects.map(() => Math.floor(Math.random() * 100)),
                },
              ]}
              type="bar"
              height={300}
            />
          </div>
        ))}
      </div>

      {/* Subject-wise Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {subjects.map((subject, index) => {
          const data = getSubjectData(subject);
          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-2">
                {subject} Performance
              </h2>
              <p>Total Questions: {data.totalQuestions}</p>
              <p>Correct Answers: {data.correct}</p>
              <p>Incorrect Answers: {data.incorrect}</p>
              <ReactApexChart
                options={{ labels: ["Correct", "Incorrect"] }}
                series={[data.correct, data.incorrect]}
                type="pie"
                height={250}
              />
            </div>
          );
        })}
      </div>

      {/* Subject-wise Semester Performance */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Subject-wise Performance Across Semesters
        </h2>
        <ReactApexChart
          options={{
            chart: { type: "line" },
            xaxis: { categories: semesters },
          }}
          series={getSubjectSemesterPerformance()}
          type="line"
          height={300}
        />
      </div>
    </div>
  );
};

export default StudentDashboard;

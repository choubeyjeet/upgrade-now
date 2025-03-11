import React from "react";
import { IoMdOpen } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-[100%] md:w-[25%]">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default function Playground() {
  const navigate = useNavigate();
  const chapters = [
    {
      title: "Gravity Basics",
      description: "Learn the fundamentals of gravity.",
      image:
        "https://cdn.mos.cms.futurecdn.net/jFaqrJF4ZpsL8u6iX4rtu7-1200-80.jpg",
    },
    {
      title: "React Patterns",
      description: "Advanced React design patterns.",
      image:
        "https://www.shutterstock.com/image-vector/hand-drawn-physic-formulas-science-260nw-2031660476.jpg",
    },
    {
      title: "Quantum Physics",
      description: "Exploring quantum mechanics concepts.",
      image:
        "https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg",
    },
    {
      title: "Quantum Physics",
      description: "Exploring quantum mechanics concepts.",
      image:
        "https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg",
    },
  ];

  const courses = [
    {
      title: "Physics 101",
      description: "Introduction to physics.",
      image:
        "https://cdn.mos.cms.futurecdn.net/jFaqrJF4ZpsL8u6iX4rtu7-1200-80.jpg",
    },
    {
      title: "Web Development",
      description: "Learn modern web technologies.",
      image:
        "https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg",
    },
    {
      title: "Machine Learning",
      description: "Dive into ML concepts.",
      image:
        "https://www.shutterstock.com/image-vector/hand-drawn-physic-formulas-science-260nw-2031660476.jpg",
    },
    {
      title: "Machine Learning",
      description: "Dive into ML concepts.",
      image:
        "https://www.shutterstock.com/image-vector/hand-drawn-physic-formulas-science-260nw-2031660476.jpg",
    },
  ];

  return (
    <div className="p-6 w-full">
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          {" "}
          <h2 className="text-xl font-bold">Chapters</h2>{" "}
          <div>
            <IoMdOpen
              className="cursor-pointer"
              onClick={() => {
                navigate("chapters");
              }}
            />
          </div>
        </div>
        <div className="flex-row md:flex gap-4 w-[100%]">
          {chapters.map((chapter, index) => (
            <Card key={index} {...chapter} />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          {" "}
          <h2 className="text-xl font-bold">Courses</h2>{" "}
          <div>
            {" "}
            <IoMdOpen
              className="cursor-pointer"
              onClick={() => {
                navigate("courses");
              }}
            />
          </div>
        </div>
        <div className="flex-row gap-4 md:flex">
          {courses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}

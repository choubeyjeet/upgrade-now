import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function BasicInfo() {
  const [focusedFields, setFocusedFields] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  return (
    <div className="w-[100%] mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Organization Name Input */}
        <div className="relative w-full mb-5">
          <input
            className="w-full h-[40px] px-2 text-sm rounded border border-[#e5e3e3] text-black
                   focus:outline-none transition-all"
            {...register("orgName", {
              required: "Organization Name is required",
            })}
            onFocus={() => handleFocus("orgName")}
            onBlur={() => handleBlur("orgName")}
            id="orgName"
          />

          <label
            htmlFor="orgName"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${
              watch("orgName") || focusedFields["orgName"]
                ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                : "text-[14px]"
            }`}
          >
            Organization Name
          </label>

          <p className="text-red-500 text-xs mt-1 text-left">
            {errors.orgName?.message}
          </p>
        </div>

        {/* Description Textarea */}
        <div className="relative">
          <textarea
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none"
            {...register("description", {
              required: "Description is required",
            })}
            onFocus={() => handleFocus("description")}
            onBlur={() => handleBlur("description")}
            id="description"
          ></textarea>

          <label
            htmlFor="description"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${
              watch("description") || focusedFields["description"]
                ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                : "text-[14px]"
            }`}
          >
            Description
          </label>

          <p className="text-red-500 text-xs text-left">
            {errors.description?.message}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

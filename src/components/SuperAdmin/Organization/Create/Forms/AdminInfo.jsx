import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AdminInfo({ initialData }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [focusedFields, setFocusedFields] = useState({});

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  useEffect(() => {
    if (initialData) {
      setValue("contact_name", initialData.contact_name || "");
      setValue("contact_email", initialData.contact_email || "");
      setValue("contact_phone", initialData.contact_phone || "");
      setValue("organization_admin", initialData.organization_admin || "");
    }
  }, [initialData, setValue]);

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white border border-gray-300 dark:bg-gray-800 rounded-lg shadow-md">
      <p className="text-[20px] font-bold text-black">Admin Info</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
        {/* Primary Contact Person Name */}
        <div className="relative w-full mb-5">
          <input
            id="contact_name"
            type="text"
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
            {...register("contact_name", { required: "Name is required" })}
            onFocus={() => handleFocus("contact_name")}
            onBlur={() => handleBlur("contact_name")}
          />
          <label
            htmlFor="contact_name"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${watch("contact_name") || focusedFields["contact_name"]
              ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
              : "text-[14px]"
              }`}
          >
            Primary Contact Person Name
          </label>
          <p className="text-red-500 text-xs mt-1 text-left">
            {errors.contact_name?.message}
          </p>
        </div>

        {/* Primary Contact Email */}
        <div className="relative w-full mb-5">
          <input
            id="contact_email"
            type="email"
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
            {...register("contact_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            onFocus={() => handleFocus("contact_email")}
            onBlur={() => handleBlur("contact_email")}
          />
          <label
            htmlFor="contact_email"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${watch("contact_email") || focusedFields["contact_email"]
              ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
              : "text-[14px]"
              }`}
          >
            Primary Contact Email
          </label>
          <p className="text-red-500 text-xs mt-1 text-left">
            {errors.contact_email?.message}
          </p>
        </div>

        {/* Primary Contact Phone */}
        <div className="relative w-full mb-5">
          <input
            id="contact_phone"
            type="tel"
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
            {...register("contact_phone", {
              pattern: {
                value: /^\+\d{1,3}\s?\d{7,14}$/,
                message: "Invalid phone number format (e.g., +1234567890)",
              },
            })}
            onFocus={() => handleFocus("contact_phone")}
            onBlur={() => handleBlur("contact_phone")}
          />
          <label
            htmlFor="contact_phone"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${watch("contact_phone") || focusedFields["contact_phone"]
              ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
              : "text-[14px]"
              }`}
          >
            Primary Contact Phone (Optional)
          </label>
          <p className="text-red-500 text-xs mt-1 text-left">
            {errors.contact_phone?.message}
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

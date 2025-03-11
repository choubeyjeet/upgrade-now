import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Settings({ initialData, existingUsers }) {
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
      setValue("primary_contact_name", initialData.primary_contact_name || "");
      setValue(
        "primary_contact_email",
        initialData.primary_contact_email || ""
      );
      setValue(
        "primary_contact_phone",
        initialData.primary_contact_phone || ""
      );
      setValue("status", initialData.status || "active");
      setValue("user_limit", initialData.user_limit || "");
      setValue("subscription_plan", initialData.subscription_plan || "");
      setValue("allowed_features", initialData.allowed_features || []);
      setValue("timezone", initialData.timezone || "");
    }
  }, [initialData, setValue]);

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white border border-gray-300  rounded-lg shadow-md">
      <p className="text-[20px] font-bold text-black">Settings</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
        {/* Status */}
        <div className="relative w-full mb-5 text-left">
          <label htmlFor="status ">Status</label>
          <select
            id="status"
            {...register("status")}
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* User Limit */}
        <div className="relative w-full mb-5 text-left">
          <label htmlFor="user_limit">User Limit (Optional)</label>
          <input
            type="number"
            id="user_limit"
            {...register("user_limit")}
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black"
          />
        </div>

        {/* Subscription Plan */}
        <div className="relative w-full mb-5 text-left">
          <label htmlFor="subscription_plan">
            Subscription Plan (Optional)
          </label>
          <select
            id="subscription_plan"
            {...register("subscription_plan")}
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black"
          >
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        {/* Allowed Features */}
        <div className="relative w-full mb-5 text-left">
          <label htmlFor="allowed_features">Allowed Features (Optional)</label>
          <input
            type="text"
            id="allowed_features"
            {...register("allowed_features")}
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black"
          />
        </div>

        {/* Timezone */}
        <div className="relative w-full mb-5 text-left">
          <label htmlFor="timezone">Timezone</label>
          <select
            id="timezone"
            {...register("timezone", { required: "Timezone is required" })}
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black"
          >
            <option value="">Select Timezone</option>
          </select>
        </div>

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

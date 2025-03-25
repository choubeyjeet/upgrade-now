import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactStuInfo({ initialData }) {
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
            setValue("email", initialData.email || "");
            setValue("phone", initialData.phone || "");
            setValue("website", initialData.website || "");
        }
    }, [initialData, setValue]);

    const onSubmit = (data) => {
        console.log("Form Submitted", data);
    };

    return (
        <div className="w-full mx-auto p-6 bg-white  border border-gray-300 rounded-lg shadow-md">
            <p className="text-[20px] font-bold text-black">Contact Info</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
                {/* Email Input */}

                <div className="relative w-full mb-5">
                    <input
                        type="email"
                        className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email format",
                            },
                        })}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        id="email"
                        name="email"
                    />
                    <label
                        htmlFor="email"
                        className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${watch("email") || focusedFields["email"]
                            ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                            : "text-[14px]"
                            }`}
                    >
                        Email
                    </label>
                    <p className="text-red-500 text-xs mt-1 text-left">
                        {errors.email?.message}
                    </p>
                </div>

                {/* Phone Input */}
                <div className="relative w-full mb-5">
                    <input
                        type="tel"
                        className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
                        {...register("phone", {
                            pattern: {
                                value: /^\+\d{1,3}\s?\d{7,14}$/,
                                message: "Invalid phone number format (e.g., +1234567890)",
                            },
                        })}
                        name="phone"
                        onFocus={() => handleFocus("phone")}
                        onBlur={() => handleBlur("phone")}
                        id="phone"
                    />
                    <label
                        htmlFor="phone"
                        className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${watch("phone") || focusedFields["phone"]
                            ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                            : "text-[14px]"
                            }`}
                    >
                        Phone Number (Optional)
                    </label>
                    <p className="text-red-500 text-xs mt-1 text-left">
                        {errors.phone?.message}
                    </p>
                </div>

                {/* Website Input */}
                <div className="relative w-full mb-5">
                    <input
                        type="text"
                        className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
                        {...register("website", {
                            pattern: {
                                value: /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/,
                                message: "Invalid URL format",
                            },
                        })}
                        name="website"
                        onFocus={() => handleFocus("website")}
                        onBlur={() => handleBlur("website")}
                        id="website"
                    />
                    <label
                        htmlFor="website"
                        className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${watch("website") || focusedFields["website"]
                            ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                            : "text-[14px]"
                            }`}
                    >
                        Website (Optional)
                    </label>
                    <p className="text-red-500 text-xs mt-1 text-left">
                        {errors.website?.message}
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

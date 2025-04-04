import React, { useState } from "react";

const FacultyContactForm = () => {
    const [formData, setFormData] = useState({
        phoneNumber: "",
        alternatePhone: "",
        email: "",
        residentialAddress: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Faculty Contact Data Submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="w-full mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Faculty Contact Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="tel"
                    name="alternatePhone"
                    placeholder="Alternate Phone Number (Optional)"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="residentialAddress"
                    placeholder="Residential Address"
                    value={formData.residentialAddress}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="emergencyContactName"
                    placeholder="Emergency Contact Name"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="tel"
                    name="emergencyContactNumber"
                    placeholder="Emergency Contact Number"
                    value={formData.emergencyContactNumber}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FacultyContactForm;
import React, { useState } from "react";

const FacultyPayment = () => {
    const [formData, setFormData] = useState({
        expectedSalary: "",
        paymentMode: "",
        extraClassesAvailability: "",
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
        console.log("Faculty Salary and Payment Details Submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="w-full mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Salary and Payment Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="expectedSalary"
                    placeholder="Expected Hourly Rate/Salary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <select
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Select Preferred Payment Mode</option>
                    <option value="bank-transfer">Bank Transfer</option>
                    <option value="cash">Cash</option>
                    <option value="upi">UPI</option>
                    <option value="paypal">PayPal</option>
                </select>
                <select
                    name="extraClassesAvailability"
                    value={formData.extraClassesAvailability}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Availability for Extra Classes</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
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

export default FacultyPayment;

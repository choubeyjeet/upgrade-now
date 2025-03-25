import React, { useState } from "react";

const BackgroundInfo = () => {
    const [formData, setFormData] = useState({
        identificationDocument: "",
        backgroundCheck: "",
        referenceLetters: "",
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
        console.log("Faculty Background and Legal Info Submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="w-full mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Background & Legal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <select
                    name="identificationDocument"
                    value={formData.identificationDocument}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Select Identification Document</option>
                    <option value="id-card">ID Card</option>
                    <option value="passport">Passport</option>
                </select>
                <select
                    name="backgroundCheck"
                    value={formData.backgroundCheck}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Background Check Clearance</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <input
                    type="text"
                    name="referenceLetters"
                    placeholder="Reference Letters (if applicable)"
                    value={formData.referenceLetters}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
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

export default BackgroundInfo;

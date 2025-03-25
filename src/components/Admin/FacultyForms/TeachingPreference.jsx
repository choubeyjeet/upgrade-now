import React, { useState } from "react";

const TeachingPreference = () => {
    const [formData, setFormData] = useState({
        teachingMode: "",
        preferredLocation: "",
        availableDays: "",
        maxStudents: "",
        lessonDuration: "",
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
        console.log("Faculty Teaching Preference Submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="w-full mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Faculty Teaching Preferences</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <select
                    name="teachingMode"
                    value={formData.teachingMode}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Select Teaching Mode</option>
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                    <option value="hybrid">Hybrid</option>
                </select>
                <input
                    type="text"
                    name="preferredLocation"
                    placeholder="Preferred Location (if in-person)"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="availableDays"
                    placeholder="Available Days and Time Slots"
                    value={formData.availableDays}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="number"
                    name="maxStudents"
                    placeholder="Maximum Students per Session"
                    value={formData.maxStudents}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="lessonDuration"
                    placeholder="Lesson Duration (in minutes/hours)"
                    value={formData.lessonDuration}
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

export default TeachingPreference;

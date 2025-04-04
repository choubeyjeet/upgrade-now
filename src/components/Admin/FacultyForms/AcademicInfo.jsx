import React, { useState } from "react";

const FacultyAcademicForm = () => {
    const [formData, setFormData] = useState({
        higherDegree: "",
        university: "",
        graduationYear: "",
        specialization: "",
        certifications: "",
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
        console.log("Faculty Academic Data Submitted:", formData);
        // Handle form submission logic here
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

    return (
        <div className="w-full mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Faculty Academic Qualifications</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="higherDegree"
                    placeholder="Higher Degree Earned"
                    value={formData.higherDegree}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="university"
                    placeholder="Institution/University Name"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <select
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Select Year of Graduation</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization/Field of Study"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="certifications"
                    placeholder="Additional Certifications (e.g. TEFL, Montessori Training)"
                    value={formData.certifications}
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

export default FacultyAcademicForm;

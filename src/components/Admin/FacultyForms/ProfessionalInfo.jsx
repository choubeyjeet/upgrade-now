import React, { useState } from "react";

const FacultyProfessionalForm = () => {
    const [formData, setFormData] = useState({
        teachingExperience: "",
        currentInstitution: "",
        pastInstitutions: "",
        subjectsTaught: "",
        gradeLevel: "",
        teachingMethodology: "",
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
        console.log("Faculty Professional Data Submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="w-full mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Faculty Professional Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="number"
                    name="teachingExperience"
                    placeholder="Total Years of Teaching Experience"
                    value={formData.teachingExperience}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="currentInstitution"
                    placeholder="Current Teaching Institution/Organization"
                    value={formData.currentInstitution}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="pastInstitutions"
                    placeholder="Past Teaching Institutions/Organizations"
                    value={formData.pastInstitutions}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="subjectsTaught"
                    placeholder="Subjects Taught"
                    value={formData.subjectsTaught}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <select
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Select Grade Level Taught</option>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="college">College</option>
                </select>
                <textarea
                    name="teachingMethodology"
                    placeholder="Teaching Style & Methodology"
                    value={formData.teachingMethodology}
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

export default FacultyProfessionalForm;

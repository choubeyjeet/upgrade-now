import React, { useState } from "react";

const SkillsInfo = () => {
    const [formData, setFormData] = useState({
        languages: "",
        techTools: "",
        specialNeedsExperience: "",
        softSkills: "",
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
        console.log("Faculty Skills and Expertise Submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="w-full mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Skills and Additional Expertise</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="languages"
                    placeholder="Languages Spoken & Proficiency"
                    value={formData.languages}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="techTools"
                    placeholder="Use of Technology in Teaching (e.g. LMS, Online Whiteboards, Zoom, etc.)"
                    value={formData.techTools}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="specialNeedsExperience"
                    placeholder="Experience with Special Needs Students (if applicable)"
                    value={formData.specialNeedsExperience}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="softSkills"
                    placeholder="Soft Skills (e.g. Patience, Communication, Adaptability, etc.)"
                    value={formData.softSkills}
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

export default SkillsInfo;

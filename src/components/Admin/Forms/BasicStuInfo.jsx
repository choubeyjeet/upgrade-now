import { useState } from "react";

export default function BasicStuInfo() {
    const [formData, setFormData] = useState({
        name: "",
        rollNo: "",
        gender: "",
        grade: "",
        dob: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Student Data Submitted:", formData);
    };

    return (
        <div className="w-full mx-auto p-6 bg-white  border border-gray-300 rounded-lg shadow-md ">
            <h2 className="text-xl font-bold mb-4">Basic Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    {/* <label className="block font-medium">Student Name</label> */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Student Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    {/* <label className="block font-medium">Roll No</label> */}
                    <input
                        type="text"
                        name="rollNo"
                        placeholder="Roll No"
                        value={formData.rollNo}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    {/* <label className="block font-medium">Gender</label> */}
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    {/* <label className="block font-medium">Grade/Class</label> */}
                    <input
                        type="text"
                        name="grade"
                        placeholder="Grade/Class"
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block  text-gray-400">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
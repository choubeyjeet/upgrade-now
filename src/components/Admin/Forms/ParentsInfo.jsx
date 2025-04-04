import { useState } from "react";

export function ParentsInfo({ onSubmit }) {
    const [parentData, setParentData] = useState({
        fullName: "",
        relationship: "",
        email: "",
        phone: "",
        altPhone: "",
        address: "",
        qualification: ""
    });

    const handleParentChange = (e) => {
        setParentData({ ...parentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(parentData);
    };

    return (
        <div className="w-full mx-auto p-6 bg-white  border border-gray-300 rounded-lg shadow-md ">
            <h2 className="text-xl font-bold mb-4">Parent/Guardian Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={parentData.fullName}
                        onChange={handleParentChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    {/* <label className="block font-medium">Relationship to Student</label> */}
                    <select
                        name="relationship"
                        value={parentData.relationship}
                        onChange={handleParentChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select Relationship to Student</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Guardian">Guardian</option>
                    </select>
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={parentData.email}
                        onChange={handleParentChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={parentData.phone}
                        onChange={handleParentChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input
                        type="text"
                        name="altPhone"
                        placeholder="Alternative Phone Number"
                        value={parentData.altPhone}
                        onChange={handleParentChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <textarea
                        name="address"
                        placeholder="Home Address"
                        value={parentData.address}
                        onChange={handleParentChange}
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block font-medium"></label>
                    <select
                        name="qualification"
                        value={parentData.qualification}
                        onChange={handleParentChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select Qualification</option>
                        <option value="High School">High School</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="PhD">PhD</option>
                    </select>
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
import React, { useState } from "react";

export function PhysicalInfo({ onSubmit }) {
    const [physicalInfo, setPhysicalInfo] = useState({
        height: "",
        weight: "",
        bloodGroup: "",
        eyeColor: "",
        hairColor: "",
        identifierMark: "",
        medicalConditions: ""
    });

    const handleChange = (e) => {
        setPhysicalInfo({ ...physicalInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(physicalInfo);
    };

    return (
        <div className="w-full mx-auto p-6 bg-white  border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Physical Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input type="text" name="height" value={physicalInfo.height} placeholder="Height" onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input type="text" name="weight" placeholder="Weight" value={physicalInfo.weight} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input type="text" placeholder="Blood Group" value={physicalInfo.bloodGroup} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input type="text" placeholder="Eye Color" value={physicalInfo.eyeColor} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input type="text" placeholder="Hair Color" value={physicalInfo.hairColor} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input type="text" placeholder="Any Identifier Mark" value={physicalInfo.identifierMark} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <textarea placeholder="Medical Conditions/Allergies" value={physicalInfo.medicalConditions} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}
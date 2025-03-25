import React, { useState } from "react";

export function SettingsForm({ onSubmit }) {
    const [settingsData, setSettingsData] = useState({
        status: "",
        allowedFeatures: "",
        timeZone: "",
        subjects: ""
    });

    const handleSettingsChange = (e) => {
        setSettingsData({ ...settingsData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(settingsData);
    };

    return (
        <div className="w-full mx-auto p-6 bg-white  border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium"></label>
                    <select
                        name="status"
                        value={settingsData.status}
                        onChange={handleSettingsChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div>
                    {/* <label className="block font-medium">Allowed Features</label> */}
                    <input
                        type="text"
                        name="allowedFeatures"
                        placeholder="Allowed Features"
                        value={settingsData.allowedFeatures}
                        onChange={handleSettingsChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input
                        type="text"
                        name="timeZone"
                        placeholder="Time Zone"
                        value={settingsData.timeZone}
                        onChange={handleSettingsChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    {/* <label className="block font-medium"></label> */}
                    <input
                        type="text"
                        name="subjects"
                        placeholder="Subjects"
                        value={settingsData.subjects}
                        onChange={handleSettingsChange}
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

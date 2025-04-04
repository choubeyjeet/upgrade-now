import { useState } from "react";
import Select from "react-select";

export default function InterestsAndHobbies({ onSubmit }) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { value: "reading", label: "Reading" },
        { value: "sports", label: "Sports" },
        { value: "music", label: "Music" },
        { value: "art", label: "Art" },
        { value: "gaming", label: "Gaming" },
        { value: "traveling", label: "Traveling" }
    ];

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(selectedOptions);
    };

    return (
        <div className="w-full mx-auto p-6 bg-white  border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Interests and Hobbies</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Select Interests & Hobbies</label>
                    <Select
                        isMulti
                        options={options}
                        value={selectedOptions}
                        onChange={handleChange}
                        className="w-full"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}

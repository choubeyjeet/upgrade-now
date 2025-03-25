import { useState } from "react";

export default function UploadFcultyPic({ onSubmit }) {
    const [photo, setPhoto] = useState(null);

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(photo);
    };

    return (
        <div className="w-full mx-auto p-6 bg-white  border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Upload Photo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Your Photo</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Upload</button>
            </form>
        </div>
    );
}
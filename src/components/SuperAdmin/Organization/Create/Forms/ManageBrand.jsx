import React, { useState, useRef } from "react";
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";

const ManageBrand = () => {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const removeImage = () => {
        setImage(null);
        setImagePreview(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full ">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Upload Your Brand Logo</h2>

            {imagePreview ? (
                <div className="relative w-full flex flex-col items-center">
                    <img src={imagePreview} alt="Logo Preview" className="w-40 h-40 object-cover rounded-md border shadow-md" />
                    <button
                        className="mt-3 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                        onClick={removeImage}
                    >
                        <FiTrash2 /> Remove
                    </button>
                </div>
            ) : (
                <div
                    className="w-full border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:border-blue-400 transition"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                >
                    <FiUploadCloud size={40} className="text-gray-400" />
                    <span className="text-gray-600 text-sm mt-2">Drag & Drop or Click to Upload</span>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                </div>
            )}
        </div>
    );
};

export default ManageBrand;
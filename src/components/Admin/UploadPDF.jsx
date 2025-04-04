import React, { useState, useRef } from "react";
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";

const UploadPDF = ({ onFileUpload }) => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile && uploadedFile.type === "application/pdf") {
            setFile(uploadedFile);
            onFileUpload(uploadedFile);
        } else {
            alert("Only PDF files are allowed.");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type === "application/pdf") {
            setFile(droppedFile);
            onFileUpload(droppedFile);
        } else {
            alert("Only PDF files are allowed.");
        }
    };

    const removeFile = () => {
        setFile(null);
        onFileUpload(null);
    };

    return (
        <div
            className="border-2 border-dashed p-4 mt-2 text-center cursor-pointer hover:border-blue-400"
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            {file ? (
                <div className="flex items-center justify-between">
                    <span>{file.name}</span>
                    <button className="text-red-500" onClick={removeFile}>
                        <FiTrash2 />
                    </button>
                </div>
            ) : (
                <>
                    <FiUploadCloud size={40} className="text-gray-400 mx-auto" />
                    <p className="text-gray-600 text-sm">Drag & Drop or Click to Upload PDF</p>
                </>
            )}
            <input
                type="file"
                accept="application/pdf"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default UploadPDF;

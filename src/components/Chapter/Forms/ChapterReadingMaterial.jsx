import React, { useState, useRef } from "react";
import { FiUploadCloud, FiTrash2, FiFileText } from "react-icons/fi";

export default function ChapterReadingMaterial() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files).filter((file) =>
      ["application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/png",
        "image/jpeg",
        "image/jpg"
      ].includes(file.type)
    );
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };


  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files).filter((file) =>
      file.type === "application/pdf" ||
      file.type === "application/msword" ||
      file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert("No files to upload!");
      return;
    }

    // Simulate upload process (Replace with API call)
    setTimeout(() => {
      alert("All files uploaded successfully!");
      setFiles([]); // Clear file list after upload
    }, 1000);
  };

  return (
    <div className="w-full mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold mb-4">Upload Reading Materials</h2>

      {/* Drag & Drop Upload Box */}
      <div
        className="w-full border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:border-blue-400 transition"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <FiUploadCloud size={40} className="text-gray-400" />
        <span className="text-gray-600 text-sm mt-2">
          Drag & Drop or Click to Upload (DOC, PDF, Image)
        </span>
        <input
          type="file"
          accept=".pdf,.doc,.docx, image/*"
          multiple
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      {/* Uploaded Files List */}
      {files.length > 0 && (
        <>
          <ul className="mt-4 space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-2 border rounded-md bg-gray-100">
                <div className="flex items-center gap-2">
                  <FiFileText className="text-gray-500" />
                  <span className="text-sm">{file.name}</span>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiTrash2 size={18} />
                </button>
              </li>
            ))}
          </ul>

          {/* Upload All Button */}
          <button
            onClick={handleUpload}
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Upload All Files
          </button>
        </>
      )}
    </div>
  );
}

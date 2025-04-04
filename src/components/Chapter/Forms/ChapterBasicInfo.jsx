import React, { useState, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function ChapterBasicInfo() {
  const [formData, setFormData] = useState({
    chapterName: "",
    description: "",
    level: "",
    thumbnail: null,
    subject: "",
  });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const [filePreview, setFilePreview] = useState(null);
  const validateForm = () => {
    let newErrors = {};
    if (!formData.chapterName)
      newErrors.chapterName = "Chapter name is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.level) newErrors.level = "Level is required";
    if (!formData.subject) newErrors.subject = "Subject selection is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFormData({ ...formData, thumbnail: droppedFile });
      setFilePreview(URL.createObjectURL(droppedFile));
    }
  };

  const removeFile = () => {
    setFormData({ ...formData, thumbnail: null });
    setFilePreview(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, thumbnail: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {/* <label className="block text-sm font-medium"></label> */}
          <input
            type="text"
            name="chapterName"
            placeholder="Chapter Name"
            value={formData.chapterName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.chapterName && (
            <p className="text-red-500 text-sm">{errors.chapterName}</p>
          )}
        </div>

        <div>
          {/* <label className="block text-sm font-medium"></label> */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium"></label>
          <input
            type="text"
            name="level"
            placeholder="Level"
            value={formData.level}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.level && (
            <p className="text-red-500 text-sm">{errors.level}</p>
          )}
        </div>


        <div>

          {filePreview ? (
            <div className="relative w-full flex flex-col items-center">
              <img src={filePreview} alt="Thumbnail Preview" className="w-40 h-40 object-cover rounded-md border shadow-md" />
              <button
                type="button"
                className="mt-3 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                onClick={removeFile}
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
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>

        <div>
          {/* <label className="block text-sm font-medium">Related Subject</label> */}
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a subject</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

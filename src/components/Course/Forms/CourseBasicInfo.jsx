import React, { useState } from "react";

export default function CourseBasicInfo() {
  const [formData, setFormData] = useState({
    chapterName: "",
    description: "",
    level: "",
    thumbnail: null,
    subject: "",
  });
  const [errors, setErrors] = useState({});

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
          <label className="block text-sm font-medium">Chapter Name</label>
          <input
            type="text"
            name="chapterName"
            value={formData.chapterName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.chapterName && (
            <p className="text-red-500 text-sm">{errors.chapterName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Level</label>
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.level && (
            <p className="text-red-500 text-sm">{errors.level}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Thumbnail</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Related Subject</label>
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

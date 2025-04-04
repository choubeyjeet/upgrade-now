import React, { useState, useRef } from "react";
import { FiUploadCloud, FiTrash2, FiLink } from "react-icons/fi";

export default function ChapterAddVideo() {
  const [videoType, setVideoType] = useState("upload"); // "upload" or "link"
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const fileInputRef = useRef(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
      setVideoLink("");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
      setVideoLink("");
    }
  };

  const handleClear = () => {
    setVideoFile(null);
    setVideoPreview(null);
    setVideoLink("");
  };

  const handleUpload = () => {
    if (videoType === "upload" && !videoFile) {
      alert("Please select a video to upload.");
      return;
    }
    if (videoType === "link" && !videoLink) {
      alert("Please enter a video link.");
      return;
    }
    alert("Video submitted successfully!");
    // Implement upload logic here (e.g., send to server)
  };

  return (
    <div className="w-full mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold mb-4">Upload Video</h2>

      {/* Radio Buttons for Selection */}
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            value="upload"
            checked={videoType === "upload"}
            onChange={() => setVideoType("upload")}
          />
          <span>Upload Video</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            value="link"
            checked={videoType === "link"}
            onChange={() => setVideoType("link")}
          />
          <span>Provide Link</span>
        </label>
      </div>

      {/* Upload Video Section */}
      {videoType === "upload" && (
        <>
          {videoPreview ? (
            <div className="mb-4">
              <video src={videoPreview} controls className="w-full rounded" />
            </div>
          ) : (
            <div
              className="w-full border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:border-blue-400 transition"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <FiUploadCloud size={40} className="text-gray-400" />
              <span className="text-gray-600 text-sm mt-2">
                Drag & Drop or Click to Upload Video
              </span>
              <input
                type="file"
                accept="video/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleVideoChange}
              />
            </div>
          )}
        </>
      )}

      {/* Provide Link Section */}
      {videoType === "link" && (
        <div className="flex flex-col mb-4">
          <div className="flex items-center border p-2 rounded-md">
            <FiLink className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter video link"
              value={videoLink}
              onChange={(e) => {
                setVideoLink(e.target.value);
                setVideoFile(null);
                setVideoPreview(e.target.value);
              }}
              className="w-full outline-none"
            />
          </div>
          {videoLink && (
            <div className="mt-4">
              <iframe
                src={videoLink}
                title="Video Preview"
                className="w-full h-56 rounded"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          <FiTrash2 className="inline-block mr-1" /> Clear
        </button>
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

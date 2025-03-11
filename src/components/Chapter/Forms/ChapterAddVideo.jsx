import React, { useState } from "react";

export default function ChapterAddVideo() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleClear = () => {
    setVideoFile(null);
    setVideoPreview(null);
  };

  const handleUpload = () => {
    if (!videoFile) {
      alert("Please select a video to upload.");
      return;
    }
    // Implement upload logic here (e.g., send to server)
    alert("Video uploaded successfully!");
  };

  return (
    <div className="w-[100%]  mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold mb-4">Upload Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        className="mb-4 w-full border p-2 rounded"
      />
      {videoPreview && (
        <div className="mb-4">
          <video src={videoPreview} controls className="w-full rounded" />
        </div>
      )}
      <div className="flex justify-between">
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Clear
        </button>
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

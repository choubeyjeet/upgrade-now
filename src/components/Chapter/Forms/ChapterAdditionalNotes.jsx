import React, { useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function ChapterAdditionalNotes() {
  const [notes, setNotes] = useState("");
  const editorRef = React.createRef();

  const handleSubmit = () => {
    if (editorRef.current) {
      setNotes(editorRef.current.getInstance().getMarkdown());
      console.log("Submitted Notes:", notes);
    }
  };

  return (
    <div className="w-[65%] mx-auto p-4 bg-white shadow-md rounded-md">
      <Editor
        initialValue=""
        previewStyle="vertical"
        height="300px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

import React, { useState } from "react";
import { MdEmail, MdClose } from "react-icons/md";
import RightSideMenu from "./RightSideMenu";
import LeftSidePreview from "./LeftSidePreview";
// import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";

export default function Inbox() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailData, setEmailData] = useState({
    recipient: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    recipient: "",
    subject: "",
    message: "",
  });

  const editorRef = React.createRef();

  const validateForm = () => {
    let newErrors = { recipient: "", subject: "", message: "" };
    let isValid = true;

    if (!emailData.recipient) {
      newErrors.recipient = "Recipient email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailData.recipient)) {
      newErrors.recipient = "Enter a valid email address.";
      isValid = false;
    }

    if (!emailData.subject) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }

    const messageContent = editorRef.current
      ?.getInstance()
      .getMarkdown()
      .trim();
    if (!messageContent) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSend = () => {
    if (validateForm()) {
      alert(
        `Email Sent:\nTo: ${emailData.recipient}\nSubject: ${emailData.subject}`
      );
      setEmailData({ recipient: "", subject: "", message: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between gap-2 items-center">
        <div className="text-[24px] text-black font-bold">Mailbox</div>
        <div>
          <button
            className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            <MdEmail />
            New Email
          </button>
        </div>
      </div>

      <div className="w-full flex-row md:flex justify-between mt-10 gap-5">
        <div className="w-full md:w-[15%]">
          <RightSideMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="w-full md:w-[85%]">
          <LeftSidePreview />
        </div>
      </div>

      {/* Email Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[70%]">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">Compose Email</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-red-500"
              >
                <MdClose size={20} />
              </button>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Recipient
              </label>
              <input
                type="email"
                name="recipient"
                value={emailData.recipient}
                onChange={(e) =>
                  setEmailData({ ...emailData, recipient: e.target.value })
                }
                className={`w-full p-2 border rounded-md mt-1 ${errors.recipient ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Enter recipient email"
              />
              {errors.recipient && (
                <p className="text-red-500 text-xs mt-1">{errors.recipient}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={emailData.subject}
                onChange={(e) =>
                  setEmailData({ ...emailData, subject: e.target.value })
                }
                className={`w-full p-2 border rounded-md mt-1 ${errors.subject ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Enter subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Editor
                ref={editorRef}
                initialValue="Write your message here..."
                previewStyle="vertical"
                height="200px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

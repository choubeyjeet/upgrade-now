import React, { useState } from "react";
import {
  FaArrowLeft,
  FaPaperPlane,
  FaEnvelope,
  FaTrash,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

export default function LeftSidePreview() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Alice Johnson",
      senderImg: "https://i.pravatar.cc/50?img=1",
      subject: "Meeting Reminder",
      content: "Don't forget our meeting at 3 PM.",
      time: "10:30 AM",
      starred: false,
    },
    {
      id: 2,
      sender: "Bob Williams",
      senderImg: "https://i.pravatar.cc/50?img=2",
      subject: "Project Update",
      content: "The project deadline has been extended to next week.",
      time: "11:15 AM",
      starred: true,
    },
    {
      id: 3,
      sender: "Charlie Brown",
      senderImg: "https://i.pravatar.cc/50?img=3",
      subject: "Payment Confirmation",
      content: "Your payment has been successfully processed.",
      time: "12:00 PM",
      starred: false,
    },
  ]);

  const handleReply = () => {
    if (reply.trim()) {
      alert(`Reply Sent: ${reply}`);
      setReply(""); // Clear input after sending
    }
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const toggleStarred = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, starred: !message.starred } : message
      )
    );
  };

  return (
    <div className="p-4 border-r w-full h-full bg-gray-100 rounded-lg shadow-md">
      {selectedMessage ? (
        <div className="p-4 bg-white rounded-lg shadow">
          <button
            onClick={() => setSelectedMessage(null)}
            className="flex items-center text-blue-500 font-semibold hover:text-blue-700"
          >
            <FaArrowLeft className="mr-2" /> Back to Messages
          </button>
          <div className="flex items-center gap-3 mt-3">
            <img
              src={selectedMessage.senderImg}
              alt="Sender"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{selectedMessage.subject}</h2>
              <p className="text-gray-500 text-sm">
                {selectedMessage.sender} - {selectedMessage.time}
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">{selectedMessage.content}</p>

          {/* Reply Section */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Reply:</h3>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <input
                type="text"
                className="w-full p-2 border-none outline-none text-gray-700"
                placeholder="Type your reply..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <button
                onClick={handleReply}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-3">Messages</h2>
          <ul>
            {messages.map((message) => (
              <li
                key={message.id}
                className="p-3 border-b flex items-center justify-between cursor-pointer hover:bg-blue-100 rounded-md transition"
              >
                <div
                  className="flex items-center gap-3"
                  onClick={() => setSelectedMessage(message)}
                >
                  <img
                    src={message.senderImg}
                    alt="Sender"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{message.sender}</p>
                    <p className="text-sm text-gray-600">{message.subject}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">{message.time}</span>
                  <FaEnvelope
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setSelectedMessage(message)}
                  />
                  <button onClick={() => toggleStarred(message.id)}>
                    {message.starred ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-gray-400 hover:text-yellow-500 transition" />
                    )}
                  </button>
                  <button onClick={() => handleDelete(message.id)}>
                    <FaTrash className="text-red-500 hover:text-red-700 transition" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

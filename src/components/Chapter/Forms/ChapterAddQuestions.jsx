import React, { useState, useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function ChapterAddQuestions() {
  const editorRef = useRef(null);
  const [createQuestion, setCreateQuestion] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 1, text: "What is React?" },
    { id: 2, text: "How does useState work?" },
    { id: 3, text: "What are props in React?" },
  ]);
  const [questionData, setQuestionData] = useState({
    question_name: "",
    question_type: "",
    option_set: [],
    answer_set: [],
  });

  const handleInputChange = (e) => {
    setQuestionData({ ...questionData, [e.target.name]: e.target.value });
  };

  const addOption = () => {
    setQuestionData({
      ...questionData,
      option_set: [...questionData.option_set, { text: "", activeField: "text" }],
    });
  };

  const updateOption = (index, value) => {
    const newOptions = [...questionData.option_set];
    newOptions[index].text = value;
    setQuestionData({ ...questionData, option_set: newOptions });
  };

  const handleCreateQuestion = () => {
    if (!questionData.question_name.trim() || !questionData.question_type) return;
    setQuestions([...questions, { id: questions.length + 1, text: questionData.question_name }]);
    setCreateQuestion(false);
    setQuestionData({ question_name: "", question_type: "", option_set: [], answer_set: [] });
  };

  return (
    <>
      <div className="w-full mx-auto p-4 border rounded-lg shadow-lg bg-white">
        <div className="mb-4 flex justify-between">
          <h1 className="text-lg font-semibold">Question List</h1>
          <button
            className="px-4 border h-[40px] rounded text-white bg-blue-500"
            onClick={() => setCreateQuestion(true)}
          >
            Create Question
          </button>
        </div>
        <ul>
          {questions.map((question) => (
            <li key={question.id} className="flex justify-between p-[10px] border-b border-gray-300">
              {question.text}
              <div className="flex space-x-2">
                <CiEdit className="cursor-pointer text-[18px]" />
                <MdOutlineDelete className="text-red-700 cursor-pointer text-[18px]" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {createQuestion && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-9">
          <div className="bg-white rounded-lg w-[70%] p-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-bold">Create Question</h2>
              <IoCloseCircle className="cursor-pointer text-[24px]" onClick={() => setCreateQuestion(false)} />
            </div>
            <div className="flex mt-4 gap-2 mb-2">
              <input
                name="question_name"
                placeholder="Name"
                type="text"
                className="border border-gray-300 h-[38px] px-4 w-1/2"
                value={questionData.question_name}
                onChange={handleInputChange}
              />
              <select
                name="question_type"
                className="border border-gray-300 h-[38px] px-2 w-1/2"
                value={questionData.question_type}
                onChange={handleInputChange}
              >
                <option value="">--Select Question Type--</option>
                <option value="MCQ_MULTIPLE">MCQ Multiple Selection</option>
                <option value="MCQ_SINGLE">MCQ Single Selection</option>
              </select>
            </div>

            <Editor
              ref={editorRef}
              height="200px"
              initialValue=""
              initialEditType="wysiwyg"
              hideModeSwitch={true}
              toolbarItems={[["heading", "bold", "italic", "strike"], ["ul", "ol"]]}
            />

            {(questionData.question_type === "MCQ_MULTIPLE" || questionData.question_type === "MCQ_SINGLE") && (
              <div className="mt-4">
                {questionData.option_set.map((option, index) => (
                  <div key={index} className="flex items-center gap-2 mt-2">
                    <input
                      type={questionData.question_type === "MCQ_MULTIPLE" ? "checkbox" : "radio"}
                      name="options"
                      className="cursor-pointer"
                    />
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) => updateOption(index, e.target.value)}
                      placeholder="Enter an option"
                      className="border border-gray-300 px-2 h-[32px] w-full"
                    />
                  </div>
                ))}
                <button
                  className="mt-2 px-4 py-1 bg-blue-500 text-white text-sm rounded flex items-center gap-2"
                  onClick={addOption}
                >
                  Add Options <FiPlusCircle />
                </button>
              </div>
            )}
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleCreateQuestion}
              >
                Create Question
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import UploadPDF from "../UploadPDF";

const BackgroundInfo = () => {
    const [formData, setFormData] = useState({
        identificationDocument: "",
        aadharNumber: "",
        passportNumber: "",
        aadharFile: null,
        passportFile: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="w-full mx-auto p-6 bg-white border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Background & Legal Information</h2>

            <select
                name="identificationDocument"
                value={formData.identificationDocument}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            >
                <option value="">Select Identification Document</option>
                <option value="aadhar">Aadhar Card</option>
                <option value="passport">Passport</option>
            </select>

            {formData.identificationDocument && (
                <>
                    <input
                        type="text"
                        name="documentNumber"
                        placeholder={`Enter ${formData.identificationDocument === "aadhar" ? "Aadhar" : "Passport"} Number`}
                        value={formData.documentNumber}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mt-2"
                        required
                    />
                    <UploadPDF onFileUpload={(file) => setFormData((prev) => ({ ...prev, documentFile: file }))} />
                </>
            )}

            <input
                type="text"
                name="referenceLetters"
                placeholder="Reference Letters (if applicable)"
                value={formData.referenceLetters}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
            />
        </div>
    );
};

export default BackgroundInfo;

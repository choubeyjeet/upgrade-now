import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Address({ initialData }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [focusedFields, setFocusedFields] = useState({});

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  useEffect(() => {
    if (initialData) {
      setValue("country", initialData.country || "");
      setValue("state", initialData.state || "");
      setValue("city", initialData.city || "");
      setValue("postalCode", initialData.postalCode || "");
      setValue("streetAddress", initialData.streetAddress || "");
    }
  }, [initialData, setValue]);

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Country Dropdown */}
        <div className="relative w-full mb-5">
          <select
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
            {...register("country", { required: "Country is required" })}
            onFocus={() => handleFocus("country")}
            onBlur={() => handleBlur("country")}
          >
            <option value="">Select Country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo (Congo-Brazzaville)">Congo</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Democratic Republic of the Congo">
              Democratic Republic of the Congo
            </option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Eswatini">Eswatini</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Greece">Greece</option>
            <option value="Grenada">Grenada</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Honduras">Honduras</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Mexico">Mexico</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Nigeria">Nigeria</option>
            <option value="North Korea">North Korea</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Panama">Panama</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Qatar">Qatar</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Thailand">Thailand</option>
            <option value="Turkey">Turkey</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Vatican City">Vatican City</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
          <p className="text-red-500 text-xs mt-1 text-left">
            {errors.country?.message}
          </p>
        </div>

        {/* State/Province Input */}
        <div className="relative w-full mb-5">
          <input
            type="text"
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
            {...register("state")}
            onFocus={() => handleFocus("state")}
            onBlur={() => handleBlur("state")}
            id="state"
          />
          <label
            htmlFor="state"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${
              watch("state") || focusedFields["state"]
                ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                : "text-[14px]"
            }`}
          >
            State/Province (Optional)
          </label>
        </div>

        {/* City Input */}
        <div className="relative w-full mb-5">
          <input
            type="text"
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
            {...register("city")}
            onFocus={() => handleFocus("city")}
            onBlur={() => handleBlur("city")}
            id="city"
          />
          <label
            htmlFor="city"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${
              watch("city") || focusedFields["city"]
                ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                : "text-[14px]"
            }`}
          >
            City (Optional)
          </label>
        </div>

        {/* Postal Code Input */}
        <div className="relative w-full mb-5">
          <input
            type="text"
            className="w-full h-10 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
            {...register("postalCode")}
            onFocus={() => handleFocus("postalCode")}
            onBlur={() => handleBlur("postalCode")}
            id="postalCode"
          />
          <label
            htmlFor="postalCode"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${
              watch("postalCode") || focusedFields["postalCode"]
                ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                : "text-[14px]"
            }`}
          >
            Postal Code/ZIP Code (Optional)
          </label>
        </div>

        {/* Street Address Textarea */}
        <div className="relative w-full mb-5">
          <textarea
            className="w-full h-20 px-2 text-sm rounded border border-gray-300 text-black focus:outline-none transition-all"
            {...register("streetAddress")}
            onFocus={() => handleFocus("streetAddress")}
            onBlur={() => handleBlur("streetAddress")}
            id="streetAddress"
          ></textarea>
          <label
            htmlFor="streetAddress"
            className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181] transition-all duration-200 ${
              watch("streetAddress") || focusedFields["streetAddress"]
                ? "text-[10px] -translate-y-5 text-[#131313] pl-1 pr-1"
                : "text-[14px]"
            }`}
          >
            Street Address (Optional)
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

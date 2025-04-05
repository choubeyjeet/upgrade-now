import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: false, password: false });

  const [focusedFields, setFocusedFields] = useState({});

  const removeErrorOnFocus = (name) => {
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? false : `${name} is required`,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);

    if (!Object.keys(newErrors).length) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <>
      <div className="w-full  h-[90vh] flex justify-between items-start">
        <div className="m-6 lg:w-[60%] w-[100%] flex flex-col justify-center items-center  h-full">
          <div className="h-full w-[100%] lg:w-[60%]">
            <div className="flex justify-start mb-6 mt-4 ">
              <img
                src="https://res.cloudinary.com/tactical-value/image/upload/v1740457883/logo_dayhmq.png"
                alt="Logo"
                className="w-[200px]"
              />
            </div>
            <div className="w-full px-5">
              <h1 className="text-3xl font-bold font-sans ">
                Welcome back! <br />
                <span className="text-sm text-blue-600">
                  Please enter your credentials to sign in!
                </span>{" "}
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 px-5">
              <div className="relative w-full mb-5">
                {/* Input Field */}
                <input
                  className={`w-full h-[40px] px-2 text-sm rounded  border border-[#e5e3e3] text-black
                    focus:outline-none    transition-all`}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => {
                    removeErrorOnFocus("email");
                    handleFocus("email");
                  }}
                  onBlur={() => handleBlur("email")}
                  id="email"
                />

                {/* Floating Label */}
                <label
                  htmlFor="email"
                  className={`absolute top-2 left-2 text-[15px] bg-white text-[#878181]  transition-all duration-200 ${formData.email || focusedFields["email"]
                    ? "text-[10px] -translate-y-5 text-[#131313]  pl-1 pr-1"
                    : "text-[14px]"
                    }`}
                >
                  Email
                </label>

                {/* Error Message */}
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative w-full mb-5">
                {/* Input Field */}
                <input
                  className={`w-full h-[40px] px-2 text-sm rounded  border border-[#e5e3e3] text-black
                    focus:outline-none    transition-all`}
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => {
                    removeErrorOnFocus("password");
                    handleFocus("password");
                  }}
                  onBlur={() => handleBlur("password")}
                  id="password"
                />

                {/* Floating Label */}
                <label
                  htmlFor="password"
                  className={`absolute top-2 left-2 text-[15px] bg-white  text-[#878181]  transition-all duration-200 ${formData.password || focusedFields["password"]
                    ? "text-[10px] -translate-y-5 text-[#131313]  pl-1 pr-1"
                    : "text-[14px]"
                    }`}
                >
                  Password
                </label>

                {/* Error Message */}
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-darkcolorBlue text-white py-2 rounded-md bg-blue-600 transition"
                onClick={() => navigate("/dashboard/home")}
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <div className=" w-[40%] m-5 h-[90vh] lg:block hidden">
          <img
            src="https://ecme-react.themenate.net/img/others/auth-side-bg.png"
            alt="i123"
            className="h-[90vh] w-full"
          />
        </div>
      </div>
    </>
  );
}

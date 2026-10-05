import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/AuthServices";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    } else if (formData.username.length < 4) {
      validationErrors.username =
        "Username must contain at least 4 characters";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password =
        "Password must contain at least 6 characters";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  try {
    const response = await loginUser({
      username: formData.username,
      password: formData.password,
    });

    console.log(response);

    navigate("/home");

  } catch (error) {

    setErrors({
      api:
        error.response?.data?.message ||  "Login Failed",});

    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        
        <div className="bg-[#FFE6E6] p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Login
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>

            <input type="text" name="username" value={formData.username}
              onChange={handleChange} placeholder="Enter username"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE6E6]"
            />

            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input type="password" name="password" value={formData.password}
              onChange={handleChange} placeholder="Enter password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE6E6]"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>
          {errors.api && (<p className="text-red-500 text-center">
           {errors.api}
         </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#FFE6E6] py-3 rounded-xl font-semibold text-gray-800 hover:bg-[#ffd8d8] transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="ml-1 font-semibold text-black hover:underline"
            >
              Sign Up
            </button>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "ADMIN",
    customerType: "RESIDENTIAL",
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

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    } else if (!phonePattern.test(formData.phone)) {
      validationErrors.phone =
        "Enter a valid 10 digit phone number";
    }

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

    if (!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword =
        "Confirm Password is required";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      validationErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="bg-[#FFE6E6] p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Sign Up
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="p-8">

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username}
                </p>
              )}
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Customer Type
              </label>

              <select
                name="customerType"
                value={formData.customerType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              >
                <option value="RESIDENTIAL">RESIDENTIAL</option>
                <option value="COMMERCIAL">COMMERCIAL</option>
              </select>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-[#FFE6E6] py-3 rounded-xl font-semibold text-gray-800 hover:bg-[#ffd8d8]"
          >
            Create Account
          </button>

          <p className="text-center mt-5 text-sm text-gray-600">
            Already have an account?
            <button
              type="button"
              onClick={() => navigate("/")}
              className="ml-1 font-semibold text-black hover:underline"
            >
              Login
            </button>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../Component/Navbar";

function Loginpage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length >= 4) {
      // Save details to localStorage
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("dob", dob);
      localStorage.setItem("userEmail", email);

      toast.success("You are successfully logged in", { autoClose: 500 });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      toast.warn("Password must be at least 4 letters.", {
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="flex mt-12 border items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full mymob:ml-8 mymob:mt-8 mymob:w-[300px] max-w-sm border"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-sky-300">
          Login
        </h2>

        <label className="block mb-2 font-medium">First Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Last Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Mobile Number</label>
        <input
          type="tel"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Date of Birth</label>
        <input
          type="date"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        <Navbar firstName={firstName} />
        <ToastContainer />
      </form>
    </div>
  );
}

export default Loginpage;

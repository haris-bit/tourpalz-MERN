"use client";

import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileType, setProfileType] = useState("Select Your Type");
  const router = useRouter();

  const handleLogin = () => {

    if (email === "" || password === "" || profileType === "Select Your Type") {
      toast.error("Please fill all the fields");
      return;
    }

    // Perform login logic here
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("profileType", profileType);

    axios.post("https://tourpalz-backend.vercel.app/login", form, {
      headers: {
        "Content-Type": 'application/json'
      }
    }).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        localStorage.setItem("email", email);
        localStorage.setItem("profileType", profileType);
        toast.success("Logged in successfully");
        router.push("/home");
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={200}
          className="mx-auto mb-4"
        />
        <div className="mb-4">
          <div className="flex items-center border-b border-gray-200 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:outline-none flex-grow"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center border-b border-gray-200 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:outline-none flex-grow"
            />
          </div>
        </div>
        <div className="mb-4">
          <select
            value={profileType}
            onChange={(e) => setProfileType(e.target.value)}
            className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="Select Your Type">Select Your Type</option>
            <option value="traveler">Traveler</option>
            <option value="tourGuide">Tour Guide</option>
          </select>
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log In
        </button>
        <p className="mt-4">
          Don&apos; have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

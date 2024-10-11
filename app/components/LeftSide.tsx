"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./styles.css";
import { FaEye, FaEyeSlash, FaGoogle, FaHome } from "react-icons/fa";

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const LeftSide = () => {
  const [signUpData, setSignUpData] = useState<Props>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [isVisible2, setIsVisible2] = useState<Boolean>(false);
  const inputStyle = "px-2 py-1 block border-2 w-full rounded-md bg-white";
  return (
    <div className=" flex justify-center items-center min-h-screen mr-3 lg:mr-0 w-2/4 md:w-2/5 max-[500px]:w-full">
      <div>
        <h2 className="text-2xl lg:text-4xl font-bold">Create a new account</h2>
        <p className="mb-2">
          It&apos;s easy! Just take a minute to provide the details
        </p>
        <form action="">
          <div className="flex">
            <div className="mr-1">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className={`${inputStyle} `}
              />
            </div>
            <div className="ml-1">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className={`${inputStyle} `}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="Enter your email address "
              className={`${inputStyle} `}
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="input-container">
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Create a new password"
                className={`${inputStyle} input-style`}
              />
              <span
                className="toggle-visibility"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? <FaEye color="black" /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block">
              Confirm Password
            </label>
            <div className="input-container">
              <input
                type={isVisible2 ? "text" : "password"}
                placeholder="Confirm your password"
                className={`${inputStyle} input-style`}
              />
              <span
                className="toggle-visibility"
                onClick={() => setIsVisible2(!isVisible2)}
              >
                {isVisible2 ? <FaEye color="black" /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="ml-2">
              I agree to the <b> Terms</b> & <b> Conditions</b>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white rounded-md h-10"
          >
            Continue
          </button>
        </form>
        <div className="divider">
          <span className="line"></span>
          <span className="or">or</span>
          <span className="line"></span>
        </div>
        <button className={inputStyle}>
          <FaGoogle className="inline mr-1" /> Continue with Google
        </button>
        <p className="text-center pt-6">
          Already have an account?{" "}
          <Link href={"#"} className="underline text-blue-500 font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

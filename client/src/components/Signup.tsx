import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const confirmPassword = document.getElementById(
      "confirm-password"
    ) as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (password.value !== confirmPassword.value) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <div className="relative z-10 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className={`mt-1 block w-full rounded-md border ${
                emailError ? "border-red-500" : "border-gray-300"
              } p-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailErrorMessage}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••"
              required
              className={`mt-1 block w-full rounded-md border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } p-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">
                {passwordErrorMessage}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="••••••"
              required
              className={`mt-1 block w-full rounded-md border ${
                confirmPasswordError ? "border-red-500" : "border-gray-300"
              } p-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">
                {confirmPasswordErrorMessage}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-md shadow transition duration-300"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

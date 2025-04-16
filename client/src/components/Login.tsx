import { useState } from "react";
import hippieVan from "../assets/images/hippieVan.png";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(new Array(6).fill("")); // Store OTP as an array of 6 characters
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [otpError, setOtpError] = useState<string>("");

  const handleContinue = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMobile = /^[0-9]{10}$/.test(email);

    if (!email.trim()) {
      setEmailError("Please enter an email or mobile number.");
    } else if (!isValidEmail && !isValidMobile) {
      setEmailError("Enter a valid email or 10-digit mobile number.");
    } else {
      setEmailError("");
      console.log("Proceed with:", email);
      // Simulate sending OTP
      setIsOtpSent(true);
    }
  };

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const newOtp = [...otp];

    // If the value is a number and it's only one character, allow it
    if (/^[0-9]{0,1}$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      // If the field is filled, focus the next input
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    }
    // If the value is empty and the index is greater than 0, focus the previous input
    else if (value === "" && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`); // Focus previous input
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  };

  const handleOtpSubmit = () => {
    if (otp.join("").length === 6) {
      console.log("OTP Submitted:", otp.join(""));
      // Add further OTP verification logic here
    } else {
      setOtpError("Please enter a valid 6-digit OTP.");
    }
  };

  const handleCancel = () => {
    setEmail("");
    setOtp(new Array(6).fill("")); // Reset OTP
    setIsOtpSent(false);
    setEmailError("");
    setOtpError("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent text-gray-400 hover:text-gray-600 text-2xl z-10 focus:outline-none focus:ring-0 ring-0 border-none"
        >
          &times;
        </button>

        {/* Left section */}
        <div className="w-full md:w-1/2 bg-blue-100 p-6 flex flex-col items-center justify-center text-center">
          <img
            src={hippieVan}
            alt="EMT"
            className="w-20 h-20 mb-4 object-contain"
          />
          <h2 className="text-xl text-teal-500 font-semibold">
            Easy Sign-Up Process
          </h2>
          <p className="text-sm text-gray-700 mt-2">
            Sign up now and start the journey
          </p>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 p-6">
          <div className="flex hidden md:block items-center justify-center">
            <h2 className="text-lg text-purple-500 font-semibold mb-4">
              Login or Create an account
            </h2>
          </div>
          {/* Conditional rendering of email input or OTP input */}
          {!isOtpSent ? (
            <>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                placeholder="Email ID or Mobile Number"
                className={`w-full border text-gray-600 ${
                  emailError ? "border-red-500" : "border-gray-300"
                } rounded px-4 py-2 mb-2 focus:outline-purple-500 focus:ring-0 focus:border-none ${
                  emailError ? "focus:ring-red-500" : "focus:ring-purple-500"
                }`}
              />
              {emailError && (
                <div className="text-red-500 text-sm mt-1">{emailError}</div>
              )}
              <button
                onClick={handleContinue}
                disabled={!email.trim()}
                className={`w-full py-2 rounded text-lg font-medium focus:outline-none focus:ring-0 focus:border-none ${
                  !email.trim()
                    ? "bg-gray-300 text-gray-600 cursor-pointer"
                    : "bg-purple-500 text-white hover:bg-purple-600"
                }`}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <div className="flex gap-2 mb-4 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        otp[index] === "" &&
                        index > 0
                      ) {
                        const prevInput = document.getElementById(
                          `otp-input-${index - 1}`
                        );
                        if (prevInput) {
                          (prevInput as HTMLInputElement).focus();
                        }
                      }
                    }}
                    maxLength={1}
                    title={`Enter digit ${index + 1} of the OTP`}
                    className={`w-12 h-12 text-center border text-gray-600 ${
                      otpError ? "border-red-500" : "border-gray-300"
                    } rounded focus:outline-purple-500 focus:ring-0 focus:border-none ${
                      otpError ? "focus:ring-red-500" : "focus:ring-purple-500"
                    }`}
                  />
                ))}
              </div>
              {otpError && (
                <div className="text-red-500 text-sm mt-1">{otpError}</div>
              )}
              <div className="flex gap-2">
                <button
                  onClick={handleOtpSubmit}
                  disabled={otp.join("").length !== 6}
                  className={`w-full py-2 rounded text-lg font-medium focus:outline-none focus:ring-0 focus:border-none ${
                    otp.join("").length !== 6
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-purple-500 text-white hover:bg-purple-600"
                  }`}
                >
                  Submit OTP
                </button>
                <button
                  onClick={handleCancel}
                  className="w-full py-2 rounded text-lg font-medium bg-gray-300 text-gray-600 hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
          <p className="text-xs text-gray-500 mt-4">
            By logging in, I understand & agree to the
            <br />
            <a href="#" className="text-blue-500">
              terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              privacy policy
            </a>
          </p>
          <a href="#" className="text-blue-500 text-sm mt-2 inline-block">
            Bank Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

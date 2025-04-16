import { useState } from "react";
import hippieVan from "../assets/images/hippieVan.png"; // Ensure the path is correct
interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden shadow-xl relative">
        {/* Close Button - Top right corner of the modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent text-gray-400 hover:text-gray-600 text-2xl z-10 focus:outline-none focus:ring-0 ring-0 border-none"
        >
          &times;
        </button>

        {/* Left section with image and text */}
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

        {/* Right section for form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-lg font-semibold mb-4">
            Login or Create an account
          </h2>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID or Mobile Number"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button className="w-full bg-purple-500 text-white py-2 rounded text-lg font-medium hover:bg-purple-600">
            Continue
          </button>

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

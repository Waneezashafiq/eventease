import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { event, name, email, phone } = state || {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-yellow-100 p-4">
      <div className="max-w-lg w-full bg-white/90 shadow-2xl rounded-3xl p-8 text-center transform transition-all duration-500 hover:scale-[1.02]">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full text-4xl">
            🎉
          </div>
        </div>

        <h2 className="text-3xl font-bold text-yellow-600 mb-2 animate-bounce">
          Registration Successful!
        </h2>
        <p className="text-gray-700 mb-2 text-lg">You’re registered for:</p>
        <h3 className="text-2xl font-semibold text-black mb-4">
          {event?.name}
        </h3>

        <div className="text-left bg-gray-50 p-4 rounded-xl mb-6 border border-yellow-200 shadow-inner">
          <p className="text-gray-800 mb-1">
            <strong>👤 Name:</strong> {name}
          </p>
          <p className="text-gray-800 mb-1">
            <strong>✉️ Email:</strong> {email}
          </p>
          <p className="text-gray-800">
            <strong>📞 Phone:</strong> {phone}
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 rounded-xl text-lg shadow-lg border border-yellow-700 hover:from-black hover:to-gray-900 hover:text-yellow-400 transition-all duration-300"
        >
           Back to Events
        </button>
      </div>
    </div>
  );
};

export default Confirmation;

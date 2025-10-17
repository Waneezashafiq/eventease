import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold text-violet-700">404 - Page Not Found</h1>
    <Link to="/" className="text-sky-400 mt-4 inline-block">
      Back to Home
    </Link>
  </div>
);

export default NotFound;

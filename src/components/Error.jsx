import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="w-full flex flex-col justify-center items-center">
    <h1 className="font-bold text-2xl text-white mt-2">
      Something went wrong. Please try again.
    </h1>
    <Link to='/' className="p-3 mt-5 bg-gray-50 rounded-lg">Go to Home</Link>
  </div>
);

export default Error;

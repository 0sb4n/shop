import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-indigo-500 text-white px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <p className="text-white mt-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="relative inline-block text-sm font-medium text-indigo-500 group focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0 rounded-lg"></span>
            <span className="relative block px-8 py-3 bg-indigo-500 border border-current rounded-lg text-white">
              Go Home
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

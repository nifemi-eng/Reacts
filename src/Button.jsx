import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="block bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}

export default Button;

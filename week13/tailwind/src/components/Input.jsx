import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <div className={`font-bold text-base`}>
      <input
        className="bg-[#19406B] text-white rounded-md px-8 py-2 text-xl"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

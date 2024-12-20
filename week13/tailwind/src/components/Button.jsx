import React from "react";

const Button = ({ children, disabled }) => {
  return (
    <div
      className={`bg-[#3FDFCF] ${
        disabled && "bg-[#7F95AC]"
      } px-32 py-3 rounded-md font-bold text-base`}
    >
      {children}
    </div>
  );
};

export default Button;

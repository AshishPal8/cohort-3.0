import React from "react";
import Logo from "../components/logo";
import Button from "../components/Button";
import Input from "../components/Input";

const Wabinar = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div>
        <Logo />
      </div>
      <h1 className="text-3xl font-bold mt-10 text-white">Verify Your Age</h1>
      <p className="text-sm font-medium text-[#607A98] mt-5">
        Please confirm your birth year. This date will not be stored.
      </p>
      <div className="mt-10">
        <Input type="text" placeholder="Enter your age" />
      </div>
      <div className="mt-10">
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Wabinar;

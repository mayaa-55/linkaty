import React from "react";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white/60 border-b border-gray-300 backdrop-blur px-5 h-18 sticky top-0 z-999">
      <img
        src="images/horizontal_transparent_logo.svg"
        alt="Logo"
        className="h-8"
      />
      <Button className="">Create your link</Button>
    </div>
  );
};

export default Navbar;

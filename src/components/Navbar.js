import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Chims Web Dev  </h1>
        
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        
        {/* Navigation Links */}
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:relative bg-white w-full md:w-auto md:bg-transparent transition-all duration-300 ${isOpen ? "top-16" : "top-[-200px]"} md:top-0`}>
          <li>
            <a href="/" className="block py-2 text-gray-600 hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="/about" className="block py-2 text-gray-600 hover:text-blue-500">About Us</a>
          </li>
          <li>
            <a href="/contact" className="block py-2 text-gray-600 hover:text-blue-500">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

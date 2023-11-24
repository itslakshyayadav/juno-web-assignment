import { useState, useEffect, useRef } from "react";
import { HiOutlineChevronDown, HiChevronUp } from "react-icons/hi2";

const BaseDropdown = ({ children, dropdownElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const selectOption = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="text-white gap-2 py-2 px-4  inline-flex items-center"
          onClick={toggleDropdown}
        >
          <span className=" flex items-center gap-1 py-2 px-3 border rounded-md text-gray-500 bg-gray-100 font-medium">
            {dropdownElement || "More"}

            {isOpen ? (
              <HiChevronUp className="text-gray-500"></HiChevronUp>
            ) : (
              <HiOutlineChevronDown className="text-gray-500"></HiOutlineChevronDown>
            )}
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="z-10 origin-top-right absolute right-0 py-1 px-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {children}
        </div>
      )}
    </div>
  );
};

export default BaseDropdown;

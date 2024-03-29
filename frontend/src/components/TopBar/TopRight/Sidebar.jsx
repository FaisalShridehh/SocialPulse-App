import { useContext } from "react";
import profileImage from "../../../assets/person/default.png";

import PropTypes from "prop-types";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

export const Sidebar = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full mobile:w-64 bg-white z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <img
          src={user?.profilePicture ? user?.profilePicture : profileImage}
          alt="Profile Image"
          className="w-16 h-16 rounded-full object-cover aspect-auto cursor-pointer"
          title={`${
            user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
          }'s Profile`}
        />
        <button
          onClick={onClose}
          className="text-[#3a3a3a] relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:-bottom-1 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 "
        >
          Close
        </button>
      </div>
      <ul className="mt-10 flex flex-col justify-center items-center">
        <li className="mb-4">
          <a
            href="#"
            className=" mr-[10px] text-lg cursor-pointer text-[#3a3a3a] relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:-bottom-1 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 "
          >
            Homepage
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className=" mr-[10px] text-lg cursor-pointer text-[#3a3a3a] relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:-bottom-1 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 "
          >
            Timeline
          </a>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
};
Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

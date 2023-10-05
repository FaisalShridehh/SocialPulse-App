import Notification from "../iconsComponents/Notification";
import Person from "../iconsComponents/Person";
import profileImage from "../../assets/person/2.jpg";
import Chat from "../iconsComponents/Chat";
import { useEffect, useState } from "react";
import { Sidebar } from "./TopRight/Sidebar";

export default function TopBarRight() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Function to close the sidebar when the window is resized
  const closeSidebarOnResize = () => {
    if (isSidebarOpen && window.innerWidth >= 1024) {
      setIsSidebarOpen(false);
    }
  };

  // Add event listener to window resize
  useEffect(() => {
    window.addEventListener("resize", closeSidebarOnResize);

    return () => {
      window.removeEventListener("resize", closeSidebarOnResize);
    };
  }, [isSidebarOpen]);

  return (
    <div className="top-bar-right flex-1 lg:flex-[4] flex  items-center gap-1">
      <div className="top-bar-links hidden flex-[8] lg:flex lg:items-center justify-end">
        <span
          className="top-bar-link mr-[10px] text-sm cursor-pointer text-[#3a3a3a] relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          Homepage
        </span>
        <span
          className="top-bar-link mr-[10px] text-sm cursor-pointer text-[#3a3a3a] relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          Timeline
        </span>
      </div>

      {/*  */}

      <div
        className={`top-bar-icons flex-[5] flex items-center justify-end  ${
          isSidebarOpen ? "hidden lg:flex" : "flex"
        }`}
      >
        <div className="top-bar-icon-item mr-[15px] cursor-pointer relative">
          <button className="hover:bg-gray-400/20 rounded-full flex items-center">
            <Person fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 " />
            <span className="top-bar-icon-badge flex justify-center items-center text-sm p-2 sm:text-base absolute w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full text-white -top-2 -right-2">
              1
            </span>
          </button>
        </div>
        <div className="top-bar-icon-item mr-[15px] cursor-pointer relative">
          <button className="hover:bg-gray-400/20 rounded-full flex items-center">
            <Chat
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 "
              containerClassName={"inline-block rounded-full p-1.5"}
            />
            <span className="top-bar-icon-badge flex justify-center items-center text-sm p-2 sm:text-base absolute w-3 h-3 sm:w-4 sm:h-4 text-white bg-red-500 rounded-full  -top-2 -right-2">
              2
            </span>
          </button>
        </div>
        <div className="top-bar-icon-item mr-[15px] cursor-pointer relative">
          <button className="hover:bg-gray-400/20 rounded-full flex items-center">
            <Notification
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 "
            />
            <span className="top-bar-icon-badge flex justify-center items-center text-sm p-2 sm:text-base absolute w-3 h-3 sm:w-4 sm:h-4 text-white bg-red-500 rounded-full  -top-2 -right-2">
              3
            </span>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="w-fit mr-4">
        <img
          src={profileImage}
          alt="Profile Image"
          className="profile-image hidden lg:block w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer "
        />
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden" onClick={toggleSidebar}>
        {/* Burger Menu Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Render the Sidebar component */}
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      )}
    </div>
  );
}

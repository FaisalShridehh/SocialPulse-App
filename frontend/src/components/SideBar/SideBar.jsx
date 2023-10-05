

import profileImage from "../../assets/person/3.jpg";
import List from "./SidebarList/List";

export default function SideBar() {
  return (
    <div className="side-bar flex-[2.5] h-[calc(100vh-50px)] sticky top-14  bottom-0 bg-white border-t-[0.5px] border-t-neutral-400/30 border-opacity-100 divide-y-[1px] divide-neutral-400/30 overflow-y-scroll scroll-smooth">
      <div className="sideWrapper p-5 ">
        <List/>

        <button className="border-2 font-medium border-neutral-400 rounded py-1 px-2 text-zinc-600 hover:text-black hover:border-black transition-all ease-in-out duration-300">
          Show More..
        </button>
      </div>

      <div>
        <ul className="sidebar-friend-list p-0 m-0 mt-3 list-none">
          <li className="sidebar-friend flex items-center mb-4 gap-4">
            <img
              src={profileImage}
              alt=""
              className="sidebar-friend-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer ml-4"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend flex items-center mb-4 gap-4">
            <img
              src={profileImage}
              alt=""
              className="sidebar-friend-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer ml-4"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend flex items-center mb-4 gap-4">
            <img
              src={profileImage}
              alt=""
              className="sidebar-friend-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer ml-4"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend flex items-center mb-4 gap-4">
            <img
              src={profileImage}
              alt=""
              className="sidebar-friend-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer ml-4"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend flex items-center mb-4 gap-4">
            <img
              src={profileImage}
              alt=""
              className="sidebar-friend-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer ml-4"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend flex items-center mb-4 gap-4">
            <img
              src={profileImage}
              alt=""
              className="sidebar-friend-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer ml-4"
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

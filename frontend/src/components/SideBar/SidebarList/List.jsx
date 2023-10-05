import Chat from "../../iconsComponents/Chat";
import Rss from "../../iconsComponents/Rss";
import Play from "../../iconsComponents/Play";
import Groups from "../../iconsComponents/Groups";
import Bookmark from "../../iconsComponents/Bookmark";
import Question from "../../iconsComponents/Question";
import Job from "../../iconsComponents/Job";
import Event from "../../iconsComponents/Event";
import Courses from "../../iconsComponents/Courses";
export default function List() {
  return (
    <ul className="sidebar-list p-0 m-0 list-none">
      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Rss
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
          />
          <span className="sidebar-item-text">Feed</span>
        </button>
      </li>
      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Chat       
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
            containerClassName={"inline-block rounded-full"}
          />
          <span className="sidebar-item-text">Chats</span>
        </button>
      </li>

      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Play
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
          />
          <span className="sidebar-item-text">Videos</span>
        </button>
      </li>
      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Groups
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
          />
          <span className="sidebar-item-text">Groups</span>
        </button>
      </li>
      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Bookmark
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
          />
          <span className="sidebar-item-text">BookMarks</span>
        </button>
      </li>
      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Question
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
          />
          <span className="sidebar-item-text">Questions</span>
        </button>
      </li>
      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Job
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
          />
          <span className="sidebar-item-text">Jobs</span>
        </button>
      </li>
      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Event
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
          />
          <span className="sidebar-item-text">Events</span>
        </button>
      </li>
      <li className="sidebar-list-item">
        <button className="sidebar-list-item flex items-center mb-5 gap-4  w-full hover:bg-gray-400/20 rounded-md p-1">
          <Courses
            className={"sidebar-icon w-6 h-6 inline"}
            fill={"currentColor"}
          />
          <span className="sidebar-item-text">Courses</span>
        </button>
      </li>
    </ul>
  );
}

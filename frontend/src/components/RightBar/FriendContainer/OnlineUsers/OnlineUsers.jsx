import profileImage from "../../../../assets/person/5.jpg";

export default function OnlineUsers() {
  return (
    <li className="right-bar-friend flex items-center mb-4 gap-2">
      <div className="right-profile-image-container mr-2.5 relative">
        <img
          src={profileImage}
          alt="Profile Image"
          className="right-bar-profile-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer ml-3"
        />
        <span className="right-bar-online w-3 h-3 border-2 rounded-full border-white absolute bottom-0 right-0 bg-green-500"></span>
      </div>
      <span className="sidebar-friend-name font-medium">Jane Doe</span>
    </li>
  );
}

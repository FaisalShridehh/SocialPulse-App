import { useEffect, useState } from "react";
import profileImage from "../../assets/person/default.png";
import axios from "axios";

const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    async function getFriendsData() {
      try {
        const response = await axios.get(
          `${BaseBackEndUrl}friends/${currentId}`
        );

        if (response.status !== 200) throw new Error("Couldn't get friends");
        // console.log("response.data => " , response.data);
        setFriends(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    if (currentId) {
      getFriendsData();
    }
  }, [currentId]);

  async function handleCreateConversation(onlineFriend) {
    try {
      const response = await axios.get(
        `${BaseBackEndUrl}conversation/find/${currentId}/${onlineFriend._id}`
      );

      if (response.status !== 200)
        throw new Error("Couldn't create conversation");

      setCurrentChat(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // console.log("onlineUsers => " , onlineUsers);
  useEffect(() => {
    // console.log("onlineUsers => " , onlineUsers);
    setOnlineFriends(
      friends.filter((friend) => onlineUsers.includes(friend._id))
    );
  }, [friends, onlineUsers]);

  // console.log("onlineFriends => " , onlineFriends);
  return (
    <div className="chat-online py-1">
      {onlineFriends.map((friend) => (
        <div
          className="chat-online-friend flex items-center p-3 gap-2 cursor-pointer hover:bg-gray-400/20 hover:rounded-lg"
          key={friend._id}
          onClick={() => handleCreateConversation(friend)}
        >
          <div className="chat-online-image-container relative">
            <img
              src={friend.ProfilePicture ? friend.ProfilePicture : profileImage}
              alt={friend.username.slice(0)}
              className="online-friend-image w-10 h-10 rounded-full object-cover aspect-auto cursor-pointer"
            />
            <span className="chat-online-badge w-3 h-3 border-2 rounded-full border-white absolute bottom-0 right-0 bg-green-500"></span>
            {/* <span className="right-bar-online w-3 h-3 border-2 rounded-full border-white absolute bottom-0 right-0 bg-red-500"></span> */}
          </div>
          <span className="chat-online-username font-medium text-sm">
            {friend.username}
          </span>
        </div>
      ))}
    </div>
  );
}

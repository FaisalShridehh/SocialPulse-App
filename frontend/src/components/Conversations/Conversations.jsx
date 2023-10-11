import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import profileImage from "../../assets/person/default.png";
import axios from "axios";

const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function Conversations({ conversation }) {
  const [user, setUser] = useState(null);

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    // console.log("Conversations => ", conversation);

    // const friendId = conversation.members.find((member) => {
    //   return (
    //     (member.senderId === currentUser._id ||
    //       member.receiverId === currentUser._id) &&
    //     (member.senderId !== currentUser._id ||
    //       member.receiverId !== currentUser._id)
    //   );
    // });

    const friendId = conversation.members.find((m) => m !== currentUser._id);

    // console.log("friendId => ", friendId);

    async function getUser() {
      try {
        if (friendId) {
          // console.log("Fetching user data for friendId: ", friendId);

          const response = await axios.get(
            `${BaseBackEndUrl}/user?userId=${friendId}`
          );
          // const response = await axios.get(
          //   `${BaseBackEndUrl}/user?userId=${
          //     friendId.senderId === currentUser._id
          //       ? friendId.receiverId
          //       : friendId.senderId
          //   }`
          // );

          if(response.status !== 200) throw new Error("Error fetching friend information in conversation component")

          // console.log("response.data", response.data);
          setUser(response.data.user);
        }
      } catch (error) {
        console.error(error);
      }
    }

    // console.log("Before calling getUser");
    getUser();
    // console.log("After calling getUser");
  }, [conversation, currentUser]);

  return (
    <div
      className="conversation flex items-center p-3 gap-2 cursor-pointer hover:bg-gray-400/20 hover:rounded-lg mt-5"
      title={`${
        user?.firstName?.charAt(0)?.toUpperCase() + user?.firstName?.slice(1)
      } Chat`}
    >
      <img
        className="conversation-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer"
        src={user?.profilePicture ? user.profilePicture : profileImage}
        alt=""
      />
      <span className="conversation-name font-medium">{user?.username}</span>
    </div>
  );
}

Conversations.propTypes = {
  conversation: PropTypes.object,
};

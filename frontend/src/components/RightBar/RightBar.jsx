import { ProfileRightBar } from "./ProfileRightBar/ProfileRightBar";
import { HomeRightBar } from "./HomeRightBar/HomeRightBar";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function RightBar({ user }) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    async function getFriends() {
      try {
        const response = await axios.get(
          `${BaseBackEndUrl}friends/${user?._id}`
        );

        // console.log("friends => ", response.data);
        setFriends(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    if (user && user._id) {
      getFriends();
    }
  }, [user?._id, user]);

  return (
    <div className="right-bar flex-[3.5] h-[calc(100vh-60px)] ">
      <div className="right-bar-wrapper pt-5 pr-5 flex flex-col divide-y-[1px] divide-neutral-400/30 gap-1">
        {user ? (
          <ProfileRightBar user={user} friends={friends} />
        ) : (
          <HomeRightBar />
        )}
      </div>
    </div>
  );
}

RightBar.propTypes = {
  user: PropTypes.object,
};

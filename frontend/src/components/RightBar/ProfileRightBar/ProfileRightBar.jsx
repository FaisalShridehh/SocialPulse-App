import { useContext, useEffect, useState } from "react";
import { Following } from "./Following";

import PropTypes from "prop-types";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import AddFriend from "../../iconsComponents/AddFriend";
import RemoveFriend from "../../iconsComponents/RemoveFriend";
import axios from "axios";
const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export function ProfileRightBar({ user, friends }) {
  const { user: currentUser, dispatch } = useContext(AuthContext);

  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    setFollowed(currentUser?.followings.includes(user._id));
        // console.log("currentUser => ", currentUser);

  }, [user._id, currentUser?.followings]);

  async function handleFollow() {
    try {
      console.log(followed);
      if (followed) {
        const response = await axios.put(
          `${BaseBackEndUrl}user/${user._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
        console.log(response.data);
        setFollowed(false);
        dispatch({
          type: "UNFOLLOW",
          payload: user._id,
        });
      } else {
        const response = await axios.put(
          `${BaseBackEndUrl}user/${user._id}/follow`,
          {
            userId: currentUser._id,
          }
        );
        console.log(response.data);
        setFollowed(true);
        dispatch({
          type: "FOLLOW",
          payload: user._id,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {user.username !== currentUser.username ? (
        <button
          className="right-bar-follow-button w-[150px]  flex justify-center items-center bg-[#4e5ed8] py-2 rounded-full text-white gap-2 hover:bg-[#4e5ed8]/80 cursor-pointer mb-2 font-medium"
          onClick={handleFollow}
        >
          {followed ? (
            <>
              UnFollow <RemoveFriend className="w-4 h-4" fill="currentColor" />
            </>
          ) : (
            <>
              Follow <AddFriend className="w-4 h-4" fill="currentColor" />
            </>
          )}
        </button>
      ) : (
        <></>
      )}
      <div>
        <h4 className="right-bar-title text-lg font-medium mb-3">
          User Information
        </h4>
        <div className="right-bar-info mb-2">
          <div className="right-bar-info-item mb-3">
            <span className="right-bar-info-key font-medium mr-4 text-[#555]">
              City:
            </span>
            <span className="right-bar-info-value font-light">{user.city}</span>
          </div>
          <div className="right-bar-info-item mb-3">
            <span className="right-bar-info-key font-medium mr-4 text-[#555]">
              From:
            </span>
            <span className="right-bar-info-value font-light">{user.from}</span>
          </div>
          <div className="right-bar-info-item mb-3">
            <span className="right-bar-info-key font-medium mr-4 text-[#555]">
              Relationship:
            </span>
            <span className="right-bar-info-value font-light">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "None"}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="right-bar-title text-lg font-medium mb-2 mt-2 ">
          User Friends
        </h4>
        <div className="right-bar-followings flex flex-wrap justify-between">
          {friends.map((friend) => (
            <Following friend={friend} key={friend._id} />
          ))}
        </div>
      </div>
    </>
  );
}

ProfileRightBar.propTypes = {
  user: PropTypes.object,
  friends: PropTypes.array,
};

import { Link } from "react-router-dom";
import profileImage from "../../../assets/person/default.png";
import PropTypes from "prop-types";

export function Following({ friend }) {
  return (
    <>
      <div className="right-bar-following flex flex-col mb-5 cursor-pointer">
        <Link to={`/profile/${friend.username}`}>
          <img
            src={friend.profilePicture ? friend.profilePicture : profileImage}
            alt="Profile Image"
            className="right-bar-following-image w-[110px] h-[110px] object-cover rounded-md"
          />
          <span className="right-bar-following-name flex justify-center items-center">
            {friend.username}
          </span>
        </Link>
      </div>
    </>
  );
}
Following.propTypes = {
  friend: PropTypes.object,
};

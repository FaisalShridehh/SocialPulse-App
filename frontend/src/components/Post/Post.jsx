import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TimeAgo from "timeago-react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

// ----------------------------------------------------------------

import defaultImage from "../../assets/person/default.png";
import defaultPost from "../../assets/person/cover-default.png";
import EllipsisVertical from "../iconsComponents/EllipsisVertical";
import Like from "../iconsComponents/Like";
import Heart from "../iconsComponents/Heart";
import { Link } from "react-router-dom";
import { PostContext } from "../../Context/PostContext/PostContext";
const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

// Function to calculate time ago
// function timeAgo(createdAt) {
//   const currentTime = new Date();
//   const createdAtDate = new Date(createdAt);
//   const timeDifferenceInSeconds = Math.floor(
//     (currentTime - createdAtDate) / 1000
//   );

//   if (timeDifferenceInSeconds < 60) {
//     return `${timeDifferenceInSeconds} second${
//       timeDifferenceInSeconds !== 1 ? "s" : ""
//     } ago`;
//   } else if (timeDifferenceInSeconds < 3600) {
//     const minutes = Math.floor(timeDifferenceInSeconds / 60);
//     return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
//   } else if (timeDifferenceInSeconds < 86400) {
//     const hours = Math.floor(timeDifferenceInSeconds / 3600);
//     return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
//   } else {
//     const days = Math.floor(timeDifferenceInSeconds / 86400);
//     return `${days} day${days !== 1 ? "s" : ""} ago`;
//   }
// }

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [heart, setHeart] = useState(post.hearts.length);
  const [isLiked, setIsLiked] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [user, setUser] = useState({});
  // const timeAgoString = timeAgo(post.createdAt); // Calculate the time ago string
  // const { user:currentUser } = useContext(AuthContext);
  useEffect(() => {
    setIsLiked(post.likes.includes(user._id)); // in case true dislike will trigger , in case false like will trigger
    setLikeClicked(post.likes.includes(user._id)); // in case true dislike will trigger , in case false like will trigger
    setHeartClicked(post.hearts.includes(user._id)); // in case true disLove will trigger , in case false love will trigger
  }, [post.likes, user._id, post.hearts]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          `${BaseBackEndUrl}user?userId=${post.userId}`
        );

        if (response.status !== 200)
          throw new Error(
            "Error  getUsers => Post]: Couldn't get posts from server"
          );

        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, [post.userId]);

  // {"_id":"65180cbf4cc1d4f998dc604c","userId":"6517f20f9f7bb59bd35e98cd","description":"hey its my first post","image":"","likes":[""],"createdAt":"2023-09-30T11:55:43.659Z","updatedAt":"2023-09-30T14:45:46.859Z","__v":0c}
  return (
    <div className="post w-full rounded-[10px]  bg-white shadow-[0px_0px_16px_-8px_rgba(0,0,0,0.68)] mx-0 my-5">
      <div className="post-wrapper p-2.5 flex flex-col divide-y-2 ">
        <div className="post-top flex justify-between items-center">
          <div className="post-top-left flex items-center gap-2">
            <Link
              to={`/profile/${user.username}`}
              className="flex items-center hover:bg-gray-400/20 hover:rounded-lg p-1 gap-2"
              title={`${
                user?.firstName?.charAt(0)?.toUpperCase() + user?.firstName?.slice(1)
              }'s Profile`}
            >
              <img
                src={user.profilePicture ? user.profilePicture : defaultImage}
                alt="Profile Image"
                className="post-profile-image w-11 h-11 rounded-full object-cover "
              />
              <span className="post-profile-name text-sm font-medium my-0  ">
                {user.username}
              </span>
            </Link>
            <TimeAgo datetime={post.createdAt} className="text-xs" />
            {/* <span className="post-profile-date text-xs">{timeAgoString}</span> */}
          </div>
          <div className="post-top-right">
            <EllipsisVertical fill={"currentColor"} className={"h-6 w-6"} />
          </div>
        </div>
        <div className="post-center py-2 my-5 mx-0">
          <span className="post-text">{post.description}</span>
          <img
            src={post.image ? `${BaseBackEndUrl}images/${post.image}` : defaultPost}
            alt={`${user.username} Post`}
            title={`${
              user?.firstName?.charAt(0)?.toUpperCase() + user?.firstName?.slice(1)
            }'s Post`}
            className="mt-2 rounded-md outline-1 outline outline-neutral-400 w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="post-bottom flex justify-between items-center pt-2">
          <div className="post-bottom-left flex items-center gap-3">
            <div className="post-bottom-left flex items-center gap-1 flex-col">
              <Like
                fill={"white"}
                className={`h-4 w-4 `}
                like={like}
                setLike={setLike}
                setHeart={setHeart}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
                likeClicked={likeClicked}
                setLikeClicked={setLikeClicked}
                setHeartClicked={setHeartClicked}
                post={post}
              />
              <Heart
                fill={"white"}
                className={`h-4 w-4 `}
                heart={heart}
                setHeart={setHeart}
                setLike={setLike}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
                heartClicked={heartClicked}
                setHeartClicked={setHeartClicked}
                setLikeClicked={setLikeClicked}
                post={post}
              />
            </div>
            <div className="flex gap-2 flex-col ">
              <span className="post-like-counter text-sm">
                {/* {like > 0 ? (
                  <>
                    {like} {like === 1 ? "person likes it" : "people like it"}
                  </>
                ) : heart > 0 ? (
                  <>
                  </>
                ) : (
                  ""
                )} */}
                {like} {like === 1 ? "person likes it" : "people like it"}
              </span>
              <span className="post-love-counter text-sm">
                {heart} {heart === 1 ? "person loves it" : "people love it"}
              </span>
            </div>
          </div>
          <div className="post-bottom-right">
            <span className="post-comments text-sm cursor-pointer">
              9 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
Post.propTypes = {
  post: PropTypes.object,
};

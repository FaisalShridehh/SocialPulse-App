import PropTypes from "prop-types";
import axios from "axios";

import { useContext } from "react";

import { AuthContext } from "../../Context/AuthContext/AuthContext";

const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function Heart({
  className,
  fill,
  heart,
  setHeart,
  setLike,
  isLiked,
  setIsLiked,
  heartClicked,
  setHeartClicked,
  setLikeClicked,
  post,
}) {
  const { user } = useContext(AuthContext);

  async function handleOnLike() {
    try {
      const response = await axios.put(
        `${BaseBackEndUrl}/post/${post._id}/love`,
        {
          userId: user._id,
        }
      );

      // console.log(response);
      // Check if response.data exists and has likedPost property
      if (response?.data?.lovedPost) {
        // User liked the post, increment the like count
        setHeart(response.data.lovedPost.hearts.length);
        setLike(response.data.lovedPost.likes.length);
      } else if (response?.data?.disLovedPost) {
        // User disliked the post, decrement the like count
        setHeart(response.data.disLovedPost.hearts.length);
        setLike(response.data.disLovedPost.likes.length);
      }

      // setHeart(heartClicked ? heart - 1 : heart + 1);
      // setLike(0)
      setIsLiked(!isLiked);
      setHeartClicked(!heartClicked);
      setLikeClicked(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      className={`${
        heartClicked ? "bg-rose-500/90" : "bg-rose-500"
      }  inline-block rounded-full p-1.5`}
      onClick={handleOnLike}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={0.5}
        stroke="currentColor"
        fill={fill}
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
}
Heart.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  heart: PropTypes.number,
  setHeart: PropTypes.func,
  setLike: PropTypes.func,
  isLiked: PropTypes.bool,
  setIsLiked: PropTypes.func,
  heartClicked: PropTypes.bool,
  setHeartClicked: PropTypes.func,
  setLikeClicked: PropTypes.func,
  post: PropTypes.object,
};

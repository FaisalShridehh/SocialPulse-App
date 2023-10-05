import PropTypes from "prop-types";

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
}) {
  function handleOnLike() {
    setHeart(heartClicked ? heart - 1 : heart + 1);
    setLike(0)
    setIsLiked(!isLiked);
    setHeartClicked(!heartClicked);
    setLikeClicked(false);
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
};

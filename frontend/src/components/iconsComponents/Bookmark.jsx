import PropTypes from "prop-types";

export default function Bookmark({ className, fill }) {
  return (
    <div className="inline-block rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={fill}
        className={className}
      >
        <path
          fillRule="evenodd"
          d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
Bookmark.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

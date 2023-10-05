import PropTypes from "prop-types";

export default function EllipsisVertical({ className, fill }) {
  return (
    <button className="inline-block rounded-full p-1.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={fill}
        className={className}
      >
        <path
          fillRule="evenodd"
          d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

EllipsisVertical.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

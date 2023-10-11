import profileImage from "../../assets/person/2.jpg";
import { PropTypes } from "prop-types";
import { useEffect, useRef } from "react";
import TimeAgo from "timeago-react";

export default function Message({ message, own }) {
  // console.log(message);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className={
        own
          ? "message own flex flex-col gap-1 items-end"
          : "message flex flex-col gap-1"
      }
      ref={scrollRef}
    >
      <div className="message-top flex gap-4 mt-5">
        <img
          className="message-image w-11 h-11 rounded-full object-cover aspect-auto cursor-pointer"
          src={profileImage}
          alt=""
        />
        <div className="flex flex-col">
          <p
            className={
              own
                ? "message-text p-3 rounded-[20px] bg-gray-400/50 text-black max-w-[300px]"
                : "message-text p-3 rounded-[20px] bg-[#4e5ed8] text-white max-w-[300px]"
            }
          >
            {message.text}
          </p>
          <div
            className={
              own
                ? "message-bottom text-gray-500 mt-1 self-end "
                : "message-bottom text-gray-500 mt-1 "
            }
          >
            <TimeAgo
              datetime={message.createdAt}
              className="text-xs font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Message.propTypes = {
  own: PropTypes.bool,
  message: PropTypes.object,
};

// className = "message own flex flex-col gap-1 items-end";
// className = "message-text p-3 rounded-[20px] bg-gray-500 text-black max-w-[300px]";

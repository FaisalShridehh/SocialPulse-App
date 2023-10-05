import { Link } from "react-router-dom";

export default function TopBarLeft() {
  return (
    <div className="top-bar-left flex-1 sm:flex-[1] lg:flex-[3]">
      <Link to={"/"}>
      <span className="logo text-lg  md:text-2xl ml-1 sm:ml-2 md:ml-5 font-bold text-[#4e5ed8] cursor-pointer tracking-wider">
        SocialPulse
      </span>
      </Link>
    </div>
  );
}

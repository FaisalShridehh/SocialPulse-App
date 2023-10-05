import Birthday from "../../iconsComponents/Birthday";
import adImage from "../../../assets/ad.png";
import Friends from "../FriendContainer/Friends";

export function HomeRightBar() {
  return (
    <>
      <div className="birthday-container flex items-center ml-2">
        <Birthday
          fill={"#de5172"}
          className={"w-6 h-6 inline-block mr-2.5"}
          strokeWidth={1}
          stroke={"#f6cb4f"}
        />
        <span className="font-light text-sm">
          <b>Muheeb Shrideh</b> and <b>3 other friends</b> have a birthday
          today.
        </span>
      </div>
      <div className="ad-container px-2">
        <img
          src={adImage}
          alt="ads"
          className="right-bar-ad w-full  rounded mx-0 my-3 "
        />
      </div>
      <Friends />
    </>
  );
}

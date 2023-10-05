import { ProfileRightBar } from "./ProfileRightBar/ProfileRightBar";
import { HomeRightBar } from "./HomeRightBar/HomeRightBar";

export default function RightBar({ profile }) {
  return (
    <div className="right-bar flex-[3.5] h-[calc(100vh-60px)] ">
      <div className="right-bar-wrapper pt-5 pr-5 flex flex-col divide-y-[1px] divide-neutral-400/30 gap-1">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

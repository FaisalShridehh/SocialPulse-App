import TopBarLeft from "./TopBarLeft";
import TopBarCenter from "./TopBarCenter";
import TopBarRight from "./TopBarRight";

export default function TopBar() {
  return (
    <div className="top-bar-container h-[60px] w-full bg-white flex items-center sticky top-0 gap-4 z-20 ">
      <TopBarLeft />
      <TopBarCenter />
      <TopBarRight />
    </div>
  );
}

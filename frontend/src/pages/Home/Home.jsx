import SideBar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
import TopBar from "../../components/TopBar/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer flex w-full">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

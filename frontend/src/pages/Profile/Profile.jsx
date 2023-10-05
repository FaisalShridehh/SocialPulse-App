import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
import postImage from "../../assets/posts/1.jpeg";
import profileImage from "../../assets/person/2.jpg";

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile flex ">
        <SideBar />
        <div className="profile-right flex-[9]">
          <div className="profile-right-top">
            <div className="profileCover h-[320px] relative">
              <img
                src={postImage}
                alt="Cover Image"
                className="profile-Cover-Img w-full h-[280px] object-cover rounded-sm"
              />
              <img
                src={profileImage}
                alt="User Image"
                className="profile-User-Img w-[160px] h-[160px] rounded-full object-cover absolute top-40  left-0 right-0 m-auto border-4 border-white"
              />
            </div>
            <div className="profile-info flex flex-col justify-center items-center mt-4">
              <h4 className="profile-info-name text-2xl font-bold tracking-wide">Faisal Shrideh</h4>
              <p className="profile-info-Desc font-light">
                Hello i am Faisal Web developer
              </p>
            </div>
          </div>
          <div className="profile-right-bottom flex">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

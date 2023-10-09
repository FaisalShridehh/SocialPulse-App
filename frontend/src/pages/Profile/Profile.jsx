import { useEffect, useState } from "react";
import axios from "axios";

// ----------------------------------------------------------------
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
import coverImage from "../../assets/person/cover-default.png";
import profileImage from "../../assets/person/default.png";
import { useParams } from "react-router-dom";
const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function Profile() {
  const [user, setUser] = useState({});
  const params = useParams();
  // console.log("params => ", params);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          `${BaseBackEndUrl}user?username=${params.username}`
        );

        if (response.status !== 200)
          throw new Error(
            "Error  getUsers => Post]: Couldn't get posts from server"
          );

        // console.log("response.data.user => ", response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, [params.username]);
  return (
    <>
      <TopBar />
      <div className="profile flex ">
        <SideBar />
        <div className="profile-right flex-[9]">
          <div className="profile-right-top">
            <div className="profileCover h-[320px] relative">
              <img
                src={user.coverPicture ? user.coverPicture : coverImage}
                alt="Cover Image"
                className="profile-Cover-Img w-full h-[280px] object-cover rounded-sm"
              />
              <img
                src={user.profilePicture ? user.profilePicture : profileImage}
                alt="User Image"
                className="profile-User-Img w-[160px] h-[160px] rounded-full object-cover absolute top-40  left-0 right-0 m-auto border-4 border-white"
              />
            </div>
            <div className="profile-info flex flex-col justify-center items-center mt-4">
              <h4 className="profile-info-name text-2xl font-bold tracking-wide">
                {user.username}
              </h4>
              <p className="profile-info-Desc font-light">{user.description}</p>
            </div>
          </div>
          <div className="profile-right-bottom flex">
            <Feed username={user.username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import profileImage from "../../assets/person/3.jpg";
import postImage from "../../assets/posts/3.jpeg";
import EllipsisVertical from "../iconsComponents/EllipsisVertical";
import Like from "../iconsComponents/Like";
import Heart from "../iconsComponents/Heart";
import axios from "axios";
const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function Post({ post }) {
  const [like, setLike] = useState(0);
  const [heart, setHeart] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [user, setUsers] = useState({});

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          `${BaseBackEndUrl}user/${post.userId}`
        );

        if (response.status !== 200)
          throw new Error(
            "Error  getUsers => Post]: Couldn't get posts from server"
          );

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, [post.userId]);

  // {"_id":"65180cbf4cc1d4f998dc604c","userId":"6517f20f9f7bb59bd35e98cd","description":"hey its my first post","image":"","likes":[""],"createdAt":"2023-09-30T11:55:43.659Z","updatedAt":"2023-09-30T14:45:46.859Z","__v":0}
  return (
    <div className="post w-full rounded-[10px]  bg-white shadow-[0px_0px_16px_-8px_rgba(0,0,0,0.68)] mx-0 my-5">
      <div className="post-wrapper p-2.5 flex flex-col divide-y-2 ">
        <div className="post-top flex justify-between items-center">
          <div className="post-top-left flex items-center pb-2">
            <img
              src={profileImage}
              alt="Profile Image"
              className="post-profile-image w-11 h-11 rounded-full object-cover mr-2.5"
            />
            <span className="post-profile-name text-sm font-medium my-0 mx-2.5 ">
              John Doe
            </span>
            <span className="post-profile-date text-xs  ">5 mins ago</span>
          </div>
          <div className="post-top-right">
            <EllipsisVertical fill={"currentColor"} className={"h-6 w-6"} />
          </div>
        </div>
        <div className="post-center py-2 my-5 mx-0">
          <span className="post-text">hey! its</span>
          <img
            src={postImage}
            alt="John Doe Post"
            className="mt-2 rounded-md outline-1 outline outline-neutral-400 w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="post-bottom flex justify-between items-center pt-2">
          <div className="post-bottom-left flex items-center gap-1">
            <Like
              fill={"white"}
              className={`h-4 w-4 `}
              like={like}
              setLike={setLike}
              setHeart={setHeart}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              likeClicked={likeClicked}
              setLikeClicked={setLikeClicked}
              setHeartClicked={setHeartClicked}
            />
            <Heart
              fill={"white"}
              className={`h-4 w-4 `}
              heart={heart}
              setHeart={setHeart}
              setLike={setLike}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              heartClicked={heartClicked}
              setHeartClicked={setHeartClicked}
              setLikeClicked={setLikeClicked}
            />
            <div className=" flex gap-2">
              <span className="post-like-counter text-sm">
                {likeClicked ? (
                  <>
                    {like} {like === 1 ? "person likes it" : "people like it"}
                  </>
                ) : heartClicked ? (
                  <>
                    {heart} {heart === 1 ? "person loves it" : "people love it"}
                  </>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>
          <div className="post-bottom-right">
            <span className="post-comments text-sm cursor-pointer">
              9 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
Post.propTypes = {
  post: PropTypes.object,
};

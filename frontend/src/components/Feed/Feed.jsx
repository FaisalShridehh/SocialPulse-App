import { useContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import SyncLoader from "react-spinners/SyncLoader";

import Post from "../Post/Post";
import Share from "../Share/Share";
import { PostContext } from "../../Context/PostContext/PostContext";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import {
  fetchPostsFailure,
  fetchPostsStart,
  fetchPostsSuccess,
} from "../../Context/PostContext/PostActions";

const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function Feed({ username }) {
  // const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);
  const { posts, isFetching, error, dispatch } = useContext(PostContext);

  // useEffect(() => {
  //   console.log("posts =>" , posts);
  // },[posts])

  useEffect(() => {
    async function getPosts() {
      try {
        dispatch(fetchPostsStart());

        const response = username
          ? await axios.get(`${BaseBackEndUrl}/posts/profile/${username}`)
          : await axios.get(`${BaseBackEndUrl}posts/timeline/${user._id}`);

        if (response.status !== 200)
          throw new Error(
            "Error [getPosts => Feed ]: Couldn't get posts from server"
          );

        // console.log(response.data);
        // setPosts(response.data);
        dispatch(fetchPostsSuccess(response.data));
      } catch (error) {
        console.error(error);
        dispatch(fetchPostsFailure(error.message));
      }
    }
    getPosts();
  }, [username, user._id, dispatch]);

  return (
    <div className="feed flex-[6]">
      <div className="feed-wrapper p-5 ">
        {!username || username === user.username ? <Share /> : <></>}
        {isFetching && (
          <div className="flex justify-center items-center h-full w-full my-4">
            <SyncLoader
              color={"#4e5ed8"}
              size={12}
              aria-label="Loading Spinner"
            />
          </div>
        )}
        {error && <div>Error: {error}</div>}
        {posts.length === 0 && !isFetching && <div>No posts to display.</div>}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

Feed.propTypes = {
  username: PropTypes.string,
};

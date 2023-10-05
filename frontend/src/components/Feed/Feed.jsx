import { useEffect, useState } from "react";
import axios from "axios";

import Post from "../Post/Post";
import Share from "../Share/Share";

const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(
          `${BaseBackEndUrl}posts/timeline/6517f20f9f7bb59bd35e98cd`
        );

        if (response.status !== 200)
          throw new Error("Error [getPosts => Feed ]: Couldn't get posts from server");

        // console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  }, []);

  return (
    <div className="feed flex-[6]">
      <div className="feed-wrapper p-5 ">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

// {"_id":"65180cbf4cc1d4f998dc604c","userId":"6517f20f9f7bb59bd35e98cd","description":"hey its my first post","image":"","likes":[""],"createdAt":"2023-09-30T11:55:43.659Z","updatedAt":"2023-09-30T14:45:46.859Z","__v":0}

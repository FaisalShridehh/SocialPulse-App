import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
//----------------------------------------------------------------
import profileImage from "../../assets/person/default.png";
import Emoji from "../iconsComponents/Emoji";
import Label from "../iconsComponents/Label";
import Map from "../iconsComponents/Map";
import Media from "../iconsComponents/Media";
import { PostContext } from "../../Context/PostContext/PostContext";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../../Context/PostContext/PostActions";
const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;
export default function Share() {
  const { user } = useContext(AuthContext);
  const { posts, dispatch } = useContext(PostContext);

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const descriptionInput = useRef();
  const fileInput = useRef();

  async function handleShareSubmit(e) {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      description: descriptionInput.current.value,
    };

    console.log("newPost", newPost); // Add this line to log newPost

    // Check if the user selected a file and wants to remove it
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);

      newPost.image = fileName;

      try {
        const response = await axios.post(`${BaseBackEndUrl}upload`, data);
        console.log("File upload response:", response); // Add this line to log the file upload response

        if (response.status !== 201) throw new Error("Error uploading files");

        console.log("Uploaded post data:", response.data); // Add this line to log the uploaded post data

      } catch (error) {
        console.error("File upload error:", error); // Add this line to log any errors during file upload
      }
      // return; // Don't proceed with posting the content
    }

    try {
      const response = await axios.post(`${BaseBackEndUrl}post`, newPost);

      console.log("Post response:", response); // Add this line to log the post response

      if (response.status !== 201)
        throw new Error(
          "[Error handle share submit]: Error while creating a post"
        );

      console.log("Uploaded post data:", response.data); // Add this line to log the uploaded post data

      // Clear the description and image preview after posting
      descriptionInput.current.value = "";
      setFile(null);
      setImagePreview(null);
      fileInput.current.value = "";
      // Update the posts context with the newly created post
      dispatch(fetchPostsSuccess([...posts, response.data.savedPost])); // Use fetchPostsSuccess
      window.location.reload()
    } catch (error) {
      console.error(error);
      dispatch(fetchPostsFailure(error.message));
    }
  }

  return (
    <div className="share w-full h-fit rounded-xl bg-white shadow-[0px_0px_16px_-8px_rgba(0,0,0,0.68)]">
      <div className="share-wrapper p-2.5 flex flex-col divide-y-2 gap-3  ">
        <div className="share-top flex flex-col justify-center item-center gap-3 ">
          <div className="flex item-center ">
            <img
              src={user.profilePicture ? user.profilePicture : profileImage}
              alt="Share"
              className="share-profile-image w-11 h-11 rounded-full object-cover mr-2.5"
            />
            <input
              type="text"
              placeholder={`What's in Your mind ${
                user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
              }?`}
              className="share-input border-none w-full focus:outline-none"
              ref={descriptionInput}
            />
          </div>
          {file ? (
            <div className=" flex justify-between items-center">
              <span className="text-sm text-neutral-400">
                Selected File : {file.name}
              </span>
              <button
                className=" bg-rose-500 text-white rounded-full h-5 w-5 p-1 text-xs flex justify-center items-center shadow-xl hover:bg-rose-600 mr-1"
                onClick={() => {
                  console.log(file);
                  setFile(null);
                  setImagePreview(null);

                  // Reset the file input value to an empty string to allow re-selection of the same file
                  if (fileInput.current) {
                    fileInput.current.value = "";
                  }
                  // console.log(file);
                }}
              >
                X
              </button>
            </div>
          ) : (
            <></>
          )}
          {imagePreview && (
            <div className="share-image-preview self-center flex w-full h-auto md:w-[500px]  mt-[10px]">
              <img
                src={imagePreview}
                alt="Image Preview"
                className=" max-w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>
        <form
          className="share-bottom flex items-center justify-between mb-2.5"
          onSubmit={handleShareSubmit}
        >
          <div className="share-options flex mt-3  gap-3 flex-wrap">
            <label
              htmlFor="File"
              className="share-option flex items-center  cursor-pointer   gap-1 hover:bg-gray-400/20 rounded-md p-1"
            >
              <Media fill="tomato" className="share-icon h-6 w-6 rounded" />
              <span className="share-option-text text-xs md:text-sm font-medium">
                Photo or video
              </span>
              <input
                type="file"
                name="file"
                id="File"
                accept=".png,.jpeg,.jpg"
                ref={fileInput}
                onChange={(e) => {
                  setFile(e.target.files[0]);

                  // Create a URL for the selected image and set it as the image preview
                  const imageURL = URL.createObjectURL(e.target.files[0]);
                  setImagePreview(imageURL);
                }}
                hidden
                style={{ display: "none" }}
              />
            </label>
            <button className="share-option flex items-center  cursor-pointer  gap-1  hover:bg-gray-400/20 rounded-md p-1">
              <Label fill="blue" className="share-icon h-6 w-6 rounded" />
              <span className="share-option-text text-xs md:text-sm font-medium">
                Tag
              </span>
            </button>
            <button className="share-option flex items-center  cursor-pointer  gap-1 hover:bg-gray-400/20 rounded-md p-1 ">
              <Map fill="green" className="share-icon h-6 w-6 rounded" />
              <span className="share-option-text text-xs md:text-sm font-medium">
                Location
              </span>
            </button>
            <button className="share-option flex items-center  cursor-pointer  gap-1 hover:bg-gray-400/20 rounded-md p-1">
              <Emoji fill="#FFB81C" className="share-icon h-6 w-6 rounded" />
              <span className="share-option-text text-xs md:text-sm font-medium">
                Emojis
              </span>
            </button>
          </div>
          <button className="share-button self-end md:self-center border-none p-1.5 rounded-md text-sm md:text-base bg-green-700 font-medium text-white mr-5 cursor-pointer mt-3 ">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

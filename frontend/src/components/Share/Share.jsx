import profileImage from "../../assets/person/3.jpg";
import Emoji from "../iconsComponents/Emoji";
import Label from "../iconsComponents/Label";
import Map from "../iconsComponents/Map";
import Media from "../iconsComponents/Media";
export default function Share() {
  return (
    <div className="share w-full h-[170px] rounded-xl bg-white shadow-[0px_0px_16px_-8px_rgba(0,0,0,0.68)]">
      <div className="share-wrapper p-2.5 flex flex-col divide-y-2 gap-3  ">
        <div className="share-top flex item-center">
          <img
            src={profileImage}
            alt="Share"
            className="share-profile-image w-11 h-11 rounded-full object-cover mr-2.5"
          />
          <input
            type="text"
            placeholder="What's in Your mind Faisal"
            className="share-input border-none w-full focus:outline-none"
          />
        </div>
        <div className="share-bottom flex items-center justify-between">
          <div className="share-options flex mt-3">
            <button className="share-option flex items-center mr-3.5 cursor-pointer   gap-1 hover:bg-gray-400/20 rounded-md p-1">
              <Media fill="tomato" className="share-icon h-6 w-6 rounded" />
              <span className="share-option-text text-sm font-medium">
                Photo or video
              </span>
            </button>
            <button className="share-option flex items-center mr-3.5 cursor-pointer  gap-1  hover:bg-gray-400/20 rounded-md p-1">
              <Label fill="blue" className="share-icon h-6 w-6 rounded" />
              <span className="share-option-text text-sm font-medium">
                Photo or video
              </span>
            </button>
            <button className="share-option flex items-center mr-3.5 cursor-pointer  gap-1 hover:bg-gray-400/20 rounded-md p-1 ">
              <Map fill="green" className="share-icon h-6 w-6 rounded" />
              <span className="share-option-text text-sm font-medium">
                Photo or video
              </span>
            </button>
            <button className="share-option flex items-center mr-3.5 cursor-pointer  gap-1 hover:bg-gray-400/20 rounded-md p-1">
              <Emoji fill="#FFB81C" className="share-icon h-6 w-6 rounded" />
              <span className="share-option-text text-sm font-medium">
                Photo or video
              </span>
            </button>
          </div>
          <button className="share-button border-none p-1.5 rounded-md bg-green-700 font-medium text-white mr-5 cursor-pointer mt-3 ">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

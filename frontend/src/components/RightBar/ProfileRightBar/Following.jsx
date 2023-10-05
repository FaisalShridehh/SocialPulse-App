import profileImage from "../../../assets/person/2.jpg";

export function Following() {
  return (
    <>
      <div className="right-bar-following flex flex-col mb-5 cursor-pointer">
        <img
          src={profileImage}
          alt="Profile Image"
          className="right-bar-following-image w-[110px] h-[110px] object-cover rounded-md"
        />
        <span className="right-bar-following-name flex justify-center items-center">
          Ex girlfriend
        </span>
      </div>
    </>
  );
}

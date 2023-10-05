import OnlineUsers from "./OnlineUsers/OnlineUsers";

export default function Friends() {
  return (
    <div className="friend-container">
      <div>
        <h4 className="right-bar-title mb-5 font-semibold ml-2 text-zinc-900 tracking-wide">
          Online Friends
        </h4>
      </div>
      <div className="">
        <ul className="right-bar-friend-list p-0 m-0 mt-3 list-none">
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
        </ul>
      </div>
    </div>
  );
}

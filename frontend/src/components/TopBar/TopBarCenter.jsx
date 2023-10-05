import Search from "../iconsComponents/Search";

export default function TopBarCenter() {
  return (
    <div className="top-bar-center sm:flex-[4] lg:flex-[5]">
      <div className="search-bar w-full h-[30px] bg-[#d9d9d9] rounded-[30px] flex items-center gap-1 border-none outline-none ">
        {/* <div className="flex items-center gap-1 h-full rounded-s-[30px] bg-[#efefef] "> */}
        <Search
          className="search-icon w-5 h-5 inline ml-[8px] "
          fill={"#4e5ed8"}
        />
        <div className="divider h-6 w-[0.5px] bg-neutral-400 opacity-100 dark:opacity-50"></div>
        {/* </div> */}
        <input
          type="text"
          placeholder="Search for friend, post or videos"
          className="searchInput w-full border-none focus:outline-none   bg-transparent placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8c8c8c] text-[#222]/80"
        />
      </div>
    </div>
  );
}

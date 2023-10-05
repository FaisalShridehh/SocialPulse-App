import { Following } from "./Following";

export function ProfileRightBar() {
  return (
    <>
      <div>
        <h4 className="right-bar-title text-lg font-medium mb-3">
          User Information
        </h4>
        <div className="right-bar-info mb-2">
          <div className="right-bar-info-item mb-3">
            <span className="right-bar-info-key font-medium mr-4 text-[#555]">
              City:
            </span>
            <span className="right-bar-info-value font-light">Irbid</span>
          </div>
          <div className="right-bar-info-item mb-3">
            <span className="right-bar-info-key font-medium mr-4 text-[#555]">
              From:
            </span>
            <span className="right-bar-info-value font-light">Jordan</span>
          </div>
          <div className="right-bar-info-item mb-3">
            <span className="right-bar-info-key font-medium mr-4 text-[#555]">
              Relationship:
            </span>
            <span className="right-bar-info-value font-light">Single</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="right-bar-title text-lg font-medium mb-2 mt-2 ">
          User Friends
        </h4>
        <div className="right-bar-followings flex flex-wrap justify-between">
          <Following />
          <Following />
          <Following />
        </div>
      </div>
    </>
  );
}

import { FaPlay, FaPause, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const SongItem2 = (props) => {
  const { image, title, singerName, time, link, singerId, isPlaying, onTogglePlay,} = props;

  return (
    <>
      <div className="flex items-center justify-between px-[18px] py-[10px] bg-[#212121] rounded-[15px]">
        {/* Left */}
        <div className="flex items-center gap-[12px] w-[40%]">
          
        <button onClick={onTogglePlay}>
          {isPlaying ? (
            <FaPause className="text-[21px] text-[#FFFFFF]" />
          ) : (
            <FaPlay className="text-[21px] text-[#FFFFFF]" />
          )}
        </button>

          <div className="w-[42px]">
            <img src={image} alt="" />
          </div>

          <div className="font-[700] text-[14px] text-[#FFFFFF] ">
            <Link to={link}>{title}</Link>
          </div>
        </div>
        {/* Center */}
        <div className="font-[400] text-[14px] text-[#FFFFFF] w-[30%] text-center">
          {singerName != null ? <>{singerName.join(", ")}</> : <>{singerId}</>}
        </div>
        {/* Right  */}
        <div className="flex gap-[18px] w-[30%] justify-end items-center">
          <div className="font-[400] text-[14px] text-[#FFFFFF]">{time}</div>
          <div className="">
            <FaHeart className="text-[21px] text-[#3B82F6]" />
          </div>
        </div>
      </div>
    </>
  );
};
import { FaHeart, FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const SongItem = (props) => {
  const { image, title, singer, listen } = props;
  return (
    <>
      <div className="flex items-center gap-[10px] p-[10px] bg-[#212121] rounded-[15px]">
        <img className="w-[76px] aspect-square" src={image} />
        <div className="flex-1">
          <div className="font-[600] text-[16px] text-[#FFFFFF]">
            <Link to="#">{title}</Link>
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80]">
            {singer}
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF]">
            {listen.toLocaleString("vi-Vn")} lượt nghe
          </div>
        </div>
        <div className="flex gap-[10px]">
          <button className="p-[10px] rounded-[999px] text-[#FFFFFF] border border-white">
            <FaPlay />
          </button>
          <button className="p-[10px] rounded-[999px] text-[#FFFFFF] border border-white">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

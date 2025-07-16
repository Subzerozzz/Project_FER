import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ButtonPlay } from "../Button/ButtonPlay";

export const SongItem = (props) => {
  const { key, image, title, singer, listen, link } = props;
  return (
    <>
      <div
        className="flex items-center gap-[10px] p-[10px] bg-[#212121] rounded-[15px] "
        key={key}
      >
        <div className="w-[76px] aspect-square rounded-[15px] overflow-hidden">
          <img className="object-cover" src={image} />
        </div>
        <div className="flex-1">
          <div className="font-[600] text-[16px] text-[#FFFFFF]">
            <Link to={link}>{title}</Link>
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80]">
            {singer.join(", ")}
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF]">
            {listen.toLocaleString("vi-Vn")} lượt nghe
          </div>
        </div>
        <div className="flex gap-[10px]">
          <ButtonPlay
            {...props}
            className="p-[10px] rounded-[999px] text-[#FFFFFF] border border-white"
          />
          <button className="p-[10px] rounded-[999px] text-[#FFFFFF] border border-white">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

import { FaPlay, FaRegHeart } from "react-icons/fa6";

export const SongItem2 = (props) => {
  const { image, title, singer, time } = props;

  return (
    <>
      <div className="flex items-center justify-between px-[18px] py-[10px] bg-[#212121] rounded-[15px]">
        {/* Left */}
        <div className="flex items-center gap-[12px] w-[40%]">
          <FaPlay className="text-[21px] text-[#FFFFFF]" />
          <div className="w-[42px]">
            <img src={image} />
          </div>

          <div className="font-[700] text-[14px] text-[#FFFFFF] ">{title}</div>
        </div>
        {/* Center */}
        <div className="font-[400] text-[14px] text-[#FFFFFF] w-[30%] text-center">
          {singer}
        </div>
        {/* Right  */}
        <div className="flex gap-[18px] w-[30%] justify-end items-center">
          <div className="font-[400] text-[14px] text-[#FFFFFF]">{time}</div>
          <div className="">
            <FaRegHeart className="text-[21px] text-[#FFFFFF]" />
          </div>
        </div>
      </div>
    </>
  );
};

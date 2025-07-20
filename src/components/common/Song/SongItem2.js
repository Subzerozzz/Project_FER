import { Link } from "react-router-dom";
import { ButtonHeart } from "../Button/ButtonHeart";
import { ButtonPlay } from "../Button/ButtonPlay";

export const SongItem2 = (props) => {
  const { image, title, singer, time, link, singerId } = props;

  return (
    <>
      <div className="flex items-center justify-between px-[18px] py-[10px] bg-[#212121] rounded-[15px]">
        {/* Left */}
        <div className="flex items-center gap-[12px] w-[40%]">
          <ButtonPlay {...props} className="text-[21px] text-[#FFFFFF]" />
          <div className="w-[42px]">
            <img src={image} />
          </div>

          <div className="font-[700] text-[14px] text-[#FFFFFF] ">
            <Link to={link}>{title}</Link>
          </div>
        </div>
        {/* Center */}
        <div className="font-[400] text-[14px] text-[#FFFFFF] w-[30%] text-center">
          {singer != null ? <>{singer.join(", ")}</> : <>{singerId}</>}
        </div>
        {/* Right  */}
        <div className="flex gap-[18px] w-[30%] justify-end items-center">
          <div className="font-[400] text-[14px] text-[#FFFFFF]">{time}</div>
          <ButtonHeart
            {...props}
            className="text-[21px] text-[#FFFFFF]"
          ></ButtonHeart>
        </div>
      </div>
    </>
  );
};

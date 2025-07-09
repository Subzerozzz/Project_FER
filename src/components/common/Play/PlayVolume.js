import { FaVolumeHigh } from "react-icons/fa6";

export const PlayVolume = () => {
  return (
    <>
      <div className="inner_right w-[184px] flex items-center gap-[6px]">
        <button className="text-[16px] text-white">
          <FaVolumeHigh />
        </button>
        <div className="relative mb-[8px]">
          <div className="h-[3px] w-[60%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[15px]"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={60}
            className="w-full h-[3px] bg-[#FFFFFF0A] rounded-[50px] cursor-pointer appearance-none range-sm"
          />
        </div>
      </div>
    </>
  );
};

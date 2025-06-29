import { FaBackwardStep, FaForwardStep, FaPlay, FaVolumeHigh } from "react-icons/fa6"

export const Play = () => {
  return(
    <>
      <div className="fixed bottom-[0] left-[0] bg-[#212121] w-full py-[20px] z-[999]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="inner_left flex gap-[13px]">
            <div className="">
              <img
                src="/demo/image-1.png"
                alt="Cô Phòng"
                className="w-[49px] h-[49px] rounded-[14px]"
              />              
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-[700] text-white">
                Cô Phòng
              </div>
              <div className="text-[12px] font-[700] text-[#FFFFFF70]">
                Hồ Quang Hiếu, Huỳnh Vận
              </div>
            </div>
          </div>

          <div className="inner_between flex-1 mx-[67px]">
            <div className="flex gap-[42px] text-white items-center justify-center">
              <button className="w-[10px] h-[12px]">  
                <FaBackwardStep/>
              </button>
              <button className="border-[1px] py-[10px] px-[10px] rounded-[99px] bg-[#00ADEF]">
                <FaPlay/>
              </button>
              <button className="w-[10px] h-[12px]">
                <FaForwardStep/>
              </button>
            </div>

            <div className="mt-[11px] relative">
              <div className="h-[4px] w-[60%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[14px]" ></div>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={60}
                className="w-full h-[4px] bg-[#FFFFFF0A] rounded-[50px] cursor-pointer appearance-none range-sm" 
              />
            </div>
            
          </div>

          <div className="inner_right w-[184px] flex items-center gap-[6px]">
            <button className="text-[16px] text-white">
              <FaVolumeHigh/>
            </button>
            <div className="relative mb-[8px]">
              <div className="h-[3px] w-[60%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[15px]" ></div>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={60}
                className="w-full h-[3px] bg-[#FFFFFF0A] rounded-[50px] cursor-pointer appearance-none range-sm" 
              />
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  )
}
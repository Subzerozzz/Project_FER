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

          <div className="inner_between">
            <div className="flex gap-[42px] text-white items-center">
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
          </div>

          <div className="inner_right">
            <button className="w-[20px] h-[14px] text-white">
              <FaVolumeHigh/>
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}
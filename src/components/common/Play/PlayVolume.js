import { FaVolumeHigh, FaVolumeOff } from "react-icons/fa6";

export const PlayVolume = () => {
  const handleChange = (event) => {
    const value = event.target.value;
    const elementInnerAudio = document.querySelector(
      ".play-audio .inner-audio"
    );
    //Gán lại thanh current volume
    const elementInnerCurrentVolume = document.querySelector(
      ".play-audio .inner-current-volume"
    );

    elementInnerCurrentVolume.style.width = `${value}%`;

    //Cập nhật âm lượng cho audio

    elementInnerAudio.volume = value / 100;
  };

  const handleVolume = () => {
    const elementInnerAudio = document.querySelector(
      ".play-audio .inner-audio"
    );
    const elementInnerButtonVolume = document.querySelector(
      ".play-audio .inner-button-volume"
    );

    if (elementInnerButtonVolume.classList.contains("off")) {
      elementInnerButtonVolume.classList.remove("off");
      //Lấy ra input volume
      const elementInnerTotalVolume = document.querySelector(
        ".play-audio .inner-total-volume"
      );
      const value = elementInnerTotalVolume.value;
      elementInnerAudio.volume = value / 100;
    } else {
      elementInnerButtonVolume.classList.add("off");
      elementInnerAudio.volume = 0;
    }
  };
  return (
    <>
      <div className="inner_right w-[184px] flex items-center gap-[6px] inner-volume">
        <button
          onClick={handleVolume}
          className="text-[16px] text-white inner-button-volume"
        >
          <FaVolumeHigh className="inner-volume-high" />
          <FaVolumeOff className="inner-volume-off hidden" />
        </button>
        <div className="relative mb-[8px]">
          <div className="h-[3px] w-[100%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[15px] inner-current-volume"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={100}
            className="w-full h-[3px] bg-[#FFFFFF0A] rounded-[50px] cursor-pointer appearance-none range-sm inner-total-volume"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

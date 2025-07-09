import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

export const PlayAction = () => {
  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    const elementInnerButtonPlay =
      elementPlayAudio.querySelector(".inner-button-play");
    const elementInnerAudio = elementPlayAudio.querySelector(".inner-audio");

    if (elementInnerButtonPlay.classList.contains("play")) {
      elementInnerButtonPlay.classList.remove("play");
      elementInnerAudio.pause();
    } else {
      elementInnerButtonPlay.classList.add("play");
      elementInnerAudio.play();
    }
  };
  return (
    <>
      <div className="flex gap-[42px] text-white items-center justify-center">
        <button className="w-[10px] h-[12px]">
          <FaBackwardStep />
        </button>
        <button
          onClick={handlePlay}
          className="border-[1px] py-[10px] px-[10px] rounded-[99px] bg-[#00ADEF] cursor-pointer inner-button-play"
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause hidden" />
        </button>
        <button className="w-[10px] h-[12px]">
          <FaForwardStep />
        </button>
      </div>
    </>
  );
};

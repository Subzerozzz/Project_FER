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

  const handleBackSong = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    const currentSongID = elementPlayAudio.getAttribute("song-id");
    const backSongID = parseInt(currentSongID) - 1;

    //Lay ra song-list tren homepage
    const songList = document.querySelector(".song-list");
    console.log(songList);

    //lay ra the có id = nextSongID
    const elementNextSong = songList.querySelector(
      `[data-song="${backSongID}"]`
    );

    //lay ra nut button và goi click
    const innerButton = elementNextSong.querySelector(".inner-button-play");
    innerButton.click();
  };

  const handleNextSong = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    const currentSongID = elementPlayAudio.getAttribute("song-id");
    const nextSongID = parseInt(currentSongID) + 1;

    //Lay ra song-list tren homepage
    const songList = document.querySelector(".song-list");
    console.log(songList);

    //lay ra the có id = nextSongID
    const elementNextSong = songList.querySelector(
      `[data-song="${nextSongID}"]`
    );

    //lay ra nut button và goi click
    const innerButton = elementNextSong.querySelector(".inner-button-play");
    innerButton.click();
  };
  return (
    <>
      <div className="flex gap-[42px] text-white items-center justify-center">
        <button onClick={handleBackSong} className="w-[10px] h-[12px]">
          <FaBackwardStep />
        </button>
        <button
          onClick={handlePlay}
          className="border-[1px] py-[10px] px-[10px] rounded-[99px] bg-[#00ADEF] cursor-pointer inner-button-play"
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause hidden" />
        </button>
        <button onClick={handleNextSong} className="w-[10px] h-[12px]">
          <FaForwardStep />
        </button>
      </div>
    </>
  );
};

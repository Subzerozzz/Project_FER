import { useState } from "react";
import { FaHeart, FaPause, FaPlay, FaRegHeart } from "react-icons/fa6";

const SongPlayListLayout = ({
    title,
    thumbnail,
    duration,
    audioUrl
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [audio, setAudio] = useState(new Audio(audioUrl));

  const handlePlay = () => {
    setIsPlay(!isPlay);
    console.log("Audio URL:", audioUrl);
    
    if (isPlay) {
      audio.pause();
    } else {
      audio.play();
    }
  };
  const handlePause = () => {
    setIsPlay(false);
    audio.pause();
  };

  const handleLike = () => {
    alert("Like song");
  };

  return (
    <div className="w-full py-3 px-4 bg-[#212121] rounded-xl">
      {/* icon play big*/}
      <div className="flex items-center justify-between rounded-full">
        <div className="flex items-center gap-x-3">
          {isPlay ? (
            <FaPause onClick={handlePlay} className="w-5 h-5 duration-150 cursor-pointer text-slate-200 hover:text-slate-300 active:text-slate-400" />
          ) : (
            <FaPlay
              onClick={handlePlay}
              className="w-5 h-5 duration-150 cursor-pointer text-slate-200 hover:text-slate-300 active:text-slate-400"
            />
          )}
          <img
            className="object-cover rounded-md size-10"
            src="/demo/singer/sontung.jpg"
            alt=""
          />
          <span className="text-sm font-medium capitalize text-slate-200">
            Nơi này có anh
          </span>
        </div>

        <h4 className="text-slate-200">Sơn tùng MTP</h4>

        <div className="flex items-center gap-3">
          <span className="text-slate-200">4:20</span>
          {isLiked ? (
            <FaHeart
              onClick={() => setIsLiked(false)}
              className="w-5 h-5 cursor-pointer text-slate-200 hover:text-slate-300 active:text-slate-400"
            />
          ) : (
            <FaRegHeart
              onClick={() => setIsLiked(true)}
              className="w-5 h-5 cursor-pointer text-slate-200 hover:text-slate-300 active:text-slate-400"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SongPlayListLayout;

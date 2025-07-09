import { PlayAction } from "./PlayAction";
import { PlayAudio } from "./PlayAudio";
import { PlayInfo } from "./PlayInfo";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";

export const Play = () => {
  return (
    <>
      <div className="fixed bottom-[0] left-[0] bg-[#212121] w-full py-[20px] z-[999] hidden play-audio">
        <PlayAudio />
        <div className="container mx-auto flex justify-between items-center">
          <PlayInfo />
          <div className="inner_between flex-1 mx-[67px]">
            <PlayAction />
            <PlayTime />
          </div>
          <PlayVolume />
        </div>
      </div>
    </>
  );
};

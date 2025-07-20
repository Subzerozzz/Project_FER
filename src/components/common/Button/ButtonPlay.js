import { FaPlay } from "react-icons/fa6";

export const ButtonPlay = (props) => {
  const { id, image, title, singer, audio, className = "" } = props;

  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    if (elementPlayAudio) {
      //Chen id
      elementPlayAudio.setAttribute("song-id", id);
      // Phát nhạc
      const elementInnerAudio = elementPlayAudio.querySelector(".inner-audio");
      const elementInnerSource =
        elementPlayAudio.querySelector(".inner-source");
      elementInnerSource.src = audio;
      elementInnerAudio.load();
      elementInnerAudio.play();

      // Hiển thị khối Play khi user click buttonPlay
      if (elementPlayAudio.classList.contains("hidden")) {
        elementPlayAudio.classList.remove("hidden");
      }

      //Hiển thị thông tin ca sĩ + bài hát vào thanh Play
      const elementInnerImage = elementPlayAudio.querySelector(".inner-image");
      const elementInnerTitle = elementPlayAudio.querySelector(".inner-title");
      const elementInnerSinger =
        elementPlayAudio.querySelector(".inner-singer");

      elementInnerImage.src = image;
      elementInnerImage.alt = title;
      elementInnerTitle.innerHTML = title;
      elementInnerSinger.innerHTML = singer;

      //Thêm class play cho nút innerbuttonPlay
      const elementInnerButtonPlay =
        elementPlayAudio.querySelector(".inner-button-play");
      elementInnerButtonPlay.classList.add("play");

      //Lấy ra tổng thời gian
      const elementPlayTimeTotal = document.querySelector(
        ".play-audio .inner-total"
      );
      const elementPlayTimeCurrent = document.querySelector(
        ".play-audio .inner-current"
      );
      elementInnerAudio.onloadedmetadata = () => {
        const totalTime = elementInnerAudio.duration;
        elementPlayTimeTotal.max = totalTime;

        // Cập nhật thời gian hiện tại cho từng thời điểm bài hát
        elementInnerAudio.ontimeupdate = () => {
          const currentTime = elementInnerAudio.currentTime;
          //Cập nhật cho thẻ input
          elementPlayTimeTotal.value = currentTime;
          //Cập nhật cho thanh div có màu
          const percent = (currentTime * 100) / totalTime;
          elementPlayTimeCurrent.style.width = `${percent}%`;
        };
      };
    }
  };
  return (
    <>
      <button onClick={handlePlay} className={className}>
        <FaPlay />
      </button>
    </>
  );
};

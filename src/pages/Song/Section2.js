import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title } from "../../components/common/Title/Title";

export const Section2 = () => {
  const { songID } = useParams();
  console.log(songID);

  const [dataFinal, setDataFinal] = useState();

  useEffect(() => {
    axios.get(`/api/songs/${songID}`).then((res) => {
      const lyricRaw = res.data.lyric;
      const lyric = lyricRaw.split(".");

      setDataFinal(lyric);
    });
  }, []);
  return (
    <>
      <div className="mb-[30px]">
        <Title text="Lời Bài Hát" />
        <div className="bg-[#212121] p-[20px] text-[#FFFFFF] rounded-[15px] text-[14px] font-[500] ">
          <div className="w-[50%] line-clamp-5">
            {dataFinal && (
              <>
                {dataFinal.map((item) => (
                  <div>{item}</div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

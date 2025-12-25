import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongItem2 } from "../../../components/common/Song/SongItem2";
import { Title } from "../../../components/common/Title/Title";

export const Section2 = () => {
  const { singerID } = useParams();

  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    axios.get(`/api/songs`).then((res) => {
      const arraySongRaw = res.data;
      const arraySong = arraySongRaw.filter((item) => {
        const singerIdArray = item.singerId;
        const find = singerIdArray.find((id) => id == singerID);

        if (find) {
          return item;
        }
      });
      axios.get("/api/singers").then((res2) => {
        const songArray2 = arraySong.map((item) => {
          const singerId = item.singerId;
          let singerString = singerId.map((id) => {
            return res2.data.find((item) => item.id == id).title;
          });

          const newItem = {
            ...item,
            singer: singerString,
          };
          return newItem;
        });
        setDataFinal(songArray2);
      });
    });
  }, []);

  return (
    <>
      <div>
        <Title text="Danh Sách Bài Hát" />
        {/* List  */}
        <div className="grid grid-cols-1 gap-[10px]">
          {dataFinal.length > 0 ? (
            <>
              {dataFinal.map((item, index) => (
                <SongItem2 key={index} {...item} />
              ))}
            </>
          ) : (
            <>
              <Title text="Chưa Có Bài Hát Nào" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

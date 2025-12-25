import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongItem2 } from "../../../components/common/Song/SongItem2";
import { Title } from "../../../components/common/Title/Title";

export const Section2 = () => {
  // Lấy ra categoryID
  const { categoryID } = useParams();

  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    axios.get(`/api/songs?categoryId=${categoryID}`).then((res) => {
      const songArray = res.data;
      console.log(songArray);

      axios.get("/api/singers").then((res2) => {
        const songArray2 = songArray.map((item) => {
          const singerId = item.singerId;
          let singerString = singerId.map((id) => {
            return res2.data.find((item) => item.id == id).title;
          });

          const newItem = {
            ...item,
            time: "4:32",
            link: `/song/${item.id}`,
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
              {dataFinal.map((item) => (
                <SongItem2 key={item.id} {...item} />
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

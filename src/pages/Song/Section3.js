import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongItem2 } from "../../components/common/Song/SongItem2";
import { Title } from "../../components/common/Title/Title";

export const Section3 = () => {
  const { songID } = useParams();
  console.log(songID);
  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9999/songs/${songID}`).then((res) => {
      const categoryID = res.data.categoryId;
      axios
        .get(`http://localhost:9999/songs?categoryId=${categoryID}`)
        .then((res) => {
          const songArray = res.data;
          axios.get("http://localhost:9999/singers").then((res2) => {
            console.log(res2.data);

            const songArray2 = songArray.map((item) => {
              const singerId = item.singerId;
              let singerString = singerId.map((id) => {
                return res2.data.find((item) => item.id == id).title;
              });

              const newItem = {
                ...item,
                singerName: singerString,
              };
              return newItem;
            });
            setDataFinal(songArray2);
          });
        });
    });
  }, []);
  return (
    <>
      <div>
        <Title text="Bài Hát Cùng Danh Mục" />
        <div className="grid grid-cols-1 gap-[10px]">
          {dataFinal.length > 0 ? (
            <>
              {dataFinal.map((item, index) => (
                <SongItem2 key={index} {...item} />
              ))}
            </>
          ) : (
            <>
              <Title text="Không Có Bài Hát Nào" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

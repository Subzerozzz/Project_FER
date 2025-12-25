import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SongItem2 } from "../../components/common/Song/SongItem2";
import { Title } from "../../components/common/Title/Title";

export const Section1 = () => {
  const [data, setData] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const keyword = searchParam.get("keyword");
  console.log(keyword);

  useEffect(() => {
    axios.get("/api/songs").then(({ data }) => {
      console.log(data);

      const newData = data.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );

      axios.get("/api/singers").then((res2) => {
        const newData2 = newData.map((item) => {
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
        setData(newData2);
      });
    });
  }, [keyword]);

  return (
    <>
      <div>
        <Title text="Kết Quả Tìm Kiếm" />
        <div className="grid grid-cols-1 gap-[10px]">
          {data.map((item, index) => (
            <SongItem2 key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

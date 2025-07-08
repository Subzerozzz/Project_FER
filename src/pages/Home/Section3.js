import axios from "axios";
import { useEffect, useState } from "react";
import { CardItem } from "../../components/common/Card/CardItem";
import { Title } from "../../components/common/Title/Title";

export const Section3 = () => {
  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/singers?_limit=5").then((res) => {
      const singerArrayRaw = res.data;
      if (singerArrayRaw) {
        const singerArray = singerArrayRaw.map((item) => {
          return { ...item, link: `singers/${item.id}` };
        });
        setDataFinal(singerArray);
      }
    });
  }, []);
  return (
    <>
      <div className="">
        <Title text="Ca Sĩ Nổi Bật" />

        <div className="grid grid-cols-5 gap-[20px]">
          {/* Item  */}
          {dataFinal.map((item, index) => (
            <CardItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

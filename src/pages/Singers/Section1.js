import axios from "axios";
import { useEffect, useState } from "react";
import { CardItem } from "../../components/common/Card/CardItem";
import { Title } from "../../components/common/Title/Title";

export const Section1 = () => {
  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/singers?_limit=5").then((res) => {
      const singerArrayRaw = res.data;
      if (singerArrayRaw) {
        const singerArray = singerArrayRaw.map((item) => {
          return { ...item, link: `/singers/${item.id}` };
        });
        setDataFinal(singerArray);
      }
    });
  }, []);
  return (
    <>
      <div className="">
        <Title text="Danh Sách Ca Sĩ" />

        <div className="grid grid-cols-5 gap-[20px]">
          {dataFinal.length > 0 ? (
            <>
              {dataFinal.map((item, index) => (
                <CardItem key={index} {...item} />
              ))}
            </>
          ) : (
            <>
              <Title text="Không Có Ca Sĩ Nào" />
            </>
          )}
        </div>
      </div>
    </>
  );
};
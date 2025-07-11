import axios from "axios";
import { useEffect, useState } from "react";
import { CardItem } from "../../../components/common/Card/CardItem";
import { Title } from "../../../components/common/Title/Title";

export const Section1 = () => {
  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/categories").then((res) => {
      const categoryArrayRaw = res.data;
      const categoryArray = categoryArrayRaw.map((item) => {
        return { ...item, link: `/categories/${item.id}` };
      });
      setDataFinal(categoryArray);
    });
  }, []);

  return (
    <>
      <div className="mb-[30px]">
        <Title text="Danh Mục Bài Hát" />

        <div className="grid grid-cols-5 gap-[20px]">
          {/* Item  */}
          {dataFinal.length > 0 ? (
            <>
              {dataFinal.map((item) => (
                <CardItem key={item.id} {...item} />
              ))}
            </>
          ) : (
            <>Không có dữ liệu</>
          )}
        </div>
      </div>
    </>
  );
};
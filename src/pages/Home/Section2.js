import axios from "axios";
import { useEffect, useState } from "react";
import { CardItem } from "../../components/common/Card/CardItem";
import { Title } from "../../components/common/Title/Title";

export const Section2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/categories").then((res) => {
      const categoryArrayRaw = res.data.slice(0, 5);
      if (categoryArrayRaw) {
        const categoryArray = categoryArrayRaw.map((item) => {
          return { ...item, link: `categories/${item.id}` };
        });
        setData(categoryArray);
      }
    });
  }, []);
  return (
    <>
      <div className="mb-[30px]">
        <Title text="Danh Mục Nổi Bật" />

        <div className="grid grid-cols-5 gap-[20px]">
          {/* Item  */}

          {data.length > 0 ? (
            <>
              {data.map((item, index) => (
                <CardItem key={index + 1} {...item} />
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
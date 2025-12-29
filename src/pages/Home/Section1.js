import axios from "axios";
import { useEffect, useState } from "react";
import { SongItem } from "../../components/common/Song/SongItem";
import { Title } from "../../components/common/Title/Title";

export const Section1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/songs").then((res) => {
      const songArray = res.data.slice(0, 3);
      axios.get("/api/singers").then((res2) => {
        console.log(res2.data);

        const songArray2 = songArray.map((item) => {
          const singerId = item.singerId;
          let singerString = singerId.map((id) => {
            return res2.data.find((item) => item.id == id).title;
          });

          const newItem = {
            ...item,
            link: `/song/${item.id}`,
            singerName: singerString,
          };
          return newItem;
        });
        setData(songArray2);
      });
    });
  }, []);

  return (
    <>
      <div className="flex gap-[20px] mb-[30px]">
        <div className="w-[534px]">
          <div
            className="flex items-center rounded-[15px] justify-between"
            style={{
              backgroundImage: "url('/demo/home/bannerHome.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex-1 ml-[30px]">
              <div className="font-[700] text-[#FFFFFF] text-[32px]">
                Nhạc EDM
              </div>
              <div className="font-[500] text-[#FFFFFF] text-[14px]">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại.
              </div>
            </div>
            <div className="mt-[48px] mr-[22px]">
              <img src="/demo/home/image-2.png" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Title text="Nghe Nhiều" />
          <div className="grid gap-[12px] song-list">
            {data.length > 0 ? (
              <>
                {data.map((item) => (
                  <SongItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    singer={item.singerName}
                    listen={item.listen}
                    link={item.link}
                    audio={item.audio}
                  />
                ))}
              </>
            ) : (
              <div>Không có dữ liệu</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

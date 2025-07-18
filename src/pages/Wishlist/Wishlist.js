import { SongItem2 } from "../../components/common/Song/SongItem2";
import { Title } from "../../components/common/Title/Title";

export const Wishlist = () => {
  const data = [
    {
      image: "/demo/home/image-9.png",
      title: "Nơi Này Có Anh",
      singer: ["Sơn Tùng M_TP"],
      time: "4.22",
    },
  ];
  return (
    <>
      <div>
        <Title text="Bài Hát Yêu Thích" />

        <div>
          {data.map((item, index) => (
            <div>
              <SongItem2 key={index} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

import { SongItem2 } from "../../components/common/Song/SongItem2";
import { Title } from "../../components/common/Title/Title";

export const Section = () => {
  const data = [
    {
      image: "/demo/home/image-9.png",
      title: "Nơi Này Có Anh",
      singer: "Sơn Tùng M-TP",
      time: "4:22",
    },
    {
      image: "/demo/home/image-9.png",
      title: "Nơi Này Có Anh",
      singer: "Sơn Tùng M-TP",
      time: "4:22",
    },
    {
      image: "/demo/home/image-9.png",
      title: "Nơi Này Có Anh",
      singer: "Sơn Tùng M-TP",
      time: "4:22",
    },
    {
      image: "/demo/home/image-9.png",
      title: "Nơi Này Có Anh",
      singer: "Sơn Tùng M-TP",
      time: "4:22",
    },
    {
      image: "/demo/home/image-9.png",
      title: "Nơi Này Có Anh",
      singer: "Sơn Tùng M-TP",
      time: "4:22",
    },
    {
      image: "/demo/home/image-9.png",
      title: "Nơi Này Có Anh",
      singer: "Sơn Tùng M-TP",
      time: "4:22",
    },
  ];

  return (
    <>
      <div>
        <Title text="Danh Sách Bài Hát" />
        {/* List  */}
        <div className="grid grid-cols-1 gap-[10px]">
          {data.map((item, index) => (
            <SongItem2 key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

import { CardInfo } from "../../components/common/Card/CardInfo";
import { SongItem2 } from "../../components/common/Song/SongItem2";
import { Title } from "../../components/common/Title/Title";

export const SongDetail = () => {
  const data = [
    {
      image: "/demo/home/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/home/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/home/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/home/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/home/image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
  ];
  return (
    <>
      <div>
        <CardInfo
          image="/demo/home/image-8.png"
          title="Cô Phòng"
          description="Hồ Quang Hiếu, Huỳnh Văn"
        />
        <Title text="Lời Bài Hát" />
        {/* List Cùng Danh Mục  */}
        <div>
          <Title text="Bài Hát Cùng Danh Mục" />
          <div className="grid grid-cols-1 gap-[10px]">
            {data.map((item, index) => (
              <SongItem2 key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

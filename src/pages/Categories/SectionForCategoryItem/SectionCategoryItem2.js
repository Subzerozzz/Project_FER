import { SongItem2 } from "../../../components/common/Song/SongItem2";
import { Title } from "../../../components/common/Title/Title";

export const SectionCategoryItem2 = () => {
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

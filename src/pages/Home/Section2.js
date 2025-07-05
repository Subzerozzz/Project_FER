import { CardItem } from "../../components/common/Card/CardItem";
import { Title } from "../../components/common/Title/Title";

export const Section2 = () => {
  const data = [
    {
      title: "Nhạc Trẻ",
      image: "/demo/home/image-6.png",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      title: "Nhạc Trẻ",
      image: "/demo/home/image-6.png",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      title: "Nhạc Trẻ",
      image: "/demo/home/image-6.png",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      title: "Nhạc Trẻ",
      image: "/demo/home/image-6.png",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      title: "Nhạc Trẻ",
      image: "/demo/home/image-6.png",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
  ];

  return (
    <>
      <div className="mb-[30px]">
        <Title text="Danh Mục Nổi Bật" />

        <div className="grid grid-cols-5 gap-[20px]">
          {/* Item  */}
          {data.map((item, index) => (
            <CardItem key={index + 1} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

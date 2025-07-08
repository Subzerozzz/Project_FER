import { CardItem } from "../../components/common/Card/CardItem";
import { Title } from "../../components/common/Title/Title";

export const Section1 = () => {
  const data = [
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      title: "Sơn Tùng M-TP",
      image: "/demo/home/image-7.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
  ];
  return (
    <>
      <div className="">
        <Title text="Danh Sách Ca Sĩ" />

        <div className="grid grid-cols-5 gap-[20px]">
          {/* Item  */}
          {data.map((item, index) => (
            <CardItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

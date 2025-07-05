import { Link } from "react-router-dom";

export const CardItem = (props) => {
  const { image, title, description, link } = props;

  return (
    <>
      <div className="">
        <Link to={link}>
          <img
            className="w-full aspect-square mb-[10px]"
            src={image}
            alt={title}
          />
          <div className="font-[700] text-[14px] text-[#FFFFFF] mb-[10px]">
            {title}
          </div>
          <div className="line-clamp-1 font-[400] text-[#FFFFFF80] text-[12px]">
            {description}
          </div>
        </Link>
      </div>
    </>
  );
};

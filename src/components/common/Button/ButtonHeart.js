import { FaHeart } from "react-icons/fa6";

export const ButtonHeart = (props) => {
  const { id, image, title, singer, audio, className = "" } = props;
  return (
    <>
      <button className={className}>
        <FaHeart />
      </button>
    </>
  );
};

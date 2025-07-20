import axios from "axios";
import { FaHeart } from "react-icons/fa6";

export const ButtonHeart = (props) => {
  const { id, image, title, singer, audio, className = "" } = props;

  const handleAddWishList = async () => {
    const accountId = parseInt(sessionStorage.getItem("account"));
    const songId = id;
    const wishlistId = Date.now();

    if (accountId == null) {
      alert("Vui lòng đăng nhập để sử dụng chức năng này !");
      return;
    }

    const { data } = await axios.get("http://localhost:9999/wishlists");
    const check = data.find(
      (item) => item.accountId === accountId && item.songId === songId
    );
    if (check) {
      alert("Bài hát này đã có trong danh sách yêu thích!");
      return;
    }
    const newWishList = {
      id: wishlistId,
      accountId: accountId,
      songId: songId,
    };

    axios
      .post("http://localhost:9999/wishlists", newWishList)
      .then(({ data }) => {
        alert("Đã thêm bài hát vào danh sách yêu thích");
      });
  };
  return (
    <>
      <button onClick={handleAddWishList} className={className}>
        <FaHeart />
      </button>
    </>
  );
};

import { FaPlay, FaRegHeart } from "react-icons/fa6";
import SongPlayListLayout from "../../../components/common/SingerDetail/SongPlayListLayout";
import songs from "./data-singer-detail";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingerDetail = () => {
  // get singerId from url params
  const { singerId } = useParams();

  // state to hold singer data
  const [singerData, setSingerData] = useState(null);
  
  /**
   * fetch singer detail by singerId
   */
  const fetchSingerDetail = (singerId) => {
    //logic fetch
  }


  return (
    <div className="min-h-screen py-10 ">
      {/* singer information */}
      <div className="flex items-center gap-10">
        {/* singer avatar */}
        <div className="flex-shrink-0 size-40 rounded-xl">
          <img
            className="object-cover w-full h-full rounded-xl"
            src={"/demo/singer/sontung.jpg"}
            alt=""
          />
        </div>

        <div className="flex-1">
          {/* singer name */}
          <div>
            <h3 className="text-[#00ADEF] text-3xl font-bold mb-2">
              Sơn Tùng M-TP {singerId}
            </h3>
            {/* singer description */}
            <p className="text-sm text-gray-500">
              Sơn Tùng M-TP là một ca sĩ, nhạc sĩ và nhà sản xuất âm nhạc nổi
              tiếng tại Việt Nam. Anh được biết đến với những bản hit đình đám
              và phong cách âm nhạc độc đáo. Sơn Tùng M-TP đã nhanh chóng trở
              thành một trong những nghệ sĩ trẻ thành công nhất tại Việt Nam,
              với hàng triệu người hâm mộ trên toàn quốc. Anh không chỉ nổi
              tiếng với giọng hát và khả năng sáng tác, mà còn với những video
              âm nhạc chất lượng cao và phong cách thời trang ấn tượng.
            </p>
          </div>
        </div>
      </div>

      {/* list songs */}
      <div className="mt-10">
        <h3 className="text-xl font-bold capitalize text-slate-200">
          Danh sách bài hát
        </h3>

        {/* songs */}
        <div className="grid grid-cols-1 gap-3 mt-5">
          {songs.map((song) => (
            <SongPlayListLayout
              key={song.id}
              title={song.title}
              thumbnail={song.thumbnail}
              duration={song.duration}
              audioUrl={song.audioUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingerDetail;

import { FaHeart, FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="flex gap-[20px]">
        <div className="w-[534px]">
          <div
            className="flex items-center rounded-[15px] justify-between"
            style={{
              backgroundImage: "url('/demo/home/bannerHome.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex-1 ml-[30px]">
              <div className="font-[700] text-[#FFFFFF] text-[32px]">
                Nhạc EDM
              </div>
              <div className="font-[500] text-[#FFFFFF] text-[14px]">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="mt-[48px] mr-[22px]">
              <img src="/demo/home/image-2.png" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="font-[700] text-[24px] text-[#EFEEE0] mb-[20px]">
            Nghe Nhiều
          </div>
          <div className="">
            {/* Item */}
            <div>
              <img src="/demo/home/image-3.png" />
              <div>
                <div className="">
                  <Link to="#">Cô Phòng</Link>
                </div>
                <div className="">Hồ Quang Hiếu, Huỳnh Văn</div>
                <div>24.500 lượt nghe</div>
              </div>
              <div className="">
                <button className="">
                  <FaPlay />
                </button>
                <button className="">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

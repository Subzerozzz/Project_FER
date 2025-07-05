import { SongItem } from "../../components/common/Song/SongItem";
import { Title } from "../../components/common/Title/Title";

export const Section1 = () => {
  return (
    <>
      <div className="flex gap-[20px] mb-[30px]">
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
          <Title text="Nghe Nhiều" />
          <div className="grid gap-[12px]">
            {/* Item */}
            <SongItem
              image="/demo/home/image-3.png"
              title="Cô Phòng"
              singer="Hồ Quang Hiếu, Huỳnh Văn"
              listen={24500}
            />
            <SongItem
              image="/demo/home/image-4.png"
              title="Hoa Nở Bên Đường"
              singer="Quang Đăng Trần, ACV"
              listen={24500}
            />
            <SongItem
              image="/demo/home/image-5.png"
              title="Hứa Đợi Nhưng Chẳng Tới"
              singer="Lâm Tuấn, Trần Thiên Vương"
              listen={24500}
            />
            {/* End Item  */}
          </div>
        </div>
      </div>
    </>
  );
};

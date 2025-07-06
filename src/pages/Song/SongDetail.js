import { CardInfo } from "../../components/common/Card/CardInfo";
import { Title } from "../../components/common/Title/Title";
import { Section3 } from "./Section3";

export const SongDetail = () => {
  return (
    <>
      <div>
        {/* CardInfo  */}
        <CardInfo
          image="/demo/home/image-8.png"
          title="Cô Phòng"
          description="Hồ Quang Hiếu, Huỳnh Văn"
        />
        {/* Lời Bài Hát  */}
        <div className="">
          <Title text="Lời Bài Hát" />
          <div className="bg-[#212121] p-[20px] text-[#FFFFFF] rounded-[15px] text-[14px] font-[500]">
            Verse: Níu ngàn lời cũng không ngăn được Bàn chân bước đi không báo
            trước Có những điều cất riêng trong lòng Giờ bốn vách ngăn cùng cô
            phòng Trốn chạy rồi hàn huyên với men Cứ thế kết thân cùng ánh đèn
            Lối mòn ngày nào trên phố quen Vẫn đó dáng hình ngày người đến
          </div>
        </div>

        {/* List Cùng Danh Mục  */}
        <Section3 />
      </div>
    </>
  );
};

import { Section1 } from "./SingerDetail/Section1";
import { Section2 } from "./SingerDetail/Section2";

export const SingerDeatail = () => {
  return (
    <>
      <div>
        {/* Thông tin ca sĩ  */}
        <Section1 />
        {/* Danh sách bài hát  */}
        <Section2 />
      </div>
    </>
  );
};

import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";

export const SongDetail = () => {
  return (
    <>
      <div>
        {/* CardInfo  */}
        <Section1 />
        {/* Lời Bài Hát  */}
        <Section2 />
        {/* List Cùng Danh Mục  */}
        <Section3 />
      </div>
    </>
  );
};

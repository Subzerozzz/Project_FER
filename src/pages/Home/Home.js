import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";

export const HomePage = () => {
  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* Section 2: Danh mục nổi bật  */}
      <Section2 />
      {/* Section 3: Ca sĩ nổi bật */}
      <Section3 />
    </>
  );
};

export const PlayInfo = () => {
  return (
    <>
      <div className="inner_left flex gap-[13px]">
        <div className="">
          <img
            src="#"
            alt=""
            className="w-[49px] h-[49px] rounded-[14px] inner-image"
          />
        </div>
        <div className="flex-1">
          <div className="text-[15px] font-[700] text-white inner-title"></div>
          <div className="text-[12px] font-[700] text-[#FFFFFF70] inner-singer"></div>
        </div>
      </div>
    </>
  );
};

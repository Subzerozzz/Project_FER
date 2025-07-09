export const PlayTime = () => {
  return (
    <>
      <div className="mt-[11px] relative inner-play-time">
        <div className="h-[4px] w-[0%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
        <input
          type="range"
          min={0}
          max={0}
          defaultValue={0}
          className="w-full h-[4px] bg-[#FFFFFF0A] rounded-[50px] cursor-pointer appearance-none range-sm inner-total"
        />
      </div>
    </>
  );
};

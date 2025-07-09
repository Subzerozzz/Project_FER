export const CardInfo = (props) => {
  const { image, title, description, singerName = "" } = props;
  return (
    <>
      <div className="flex gap-[20px] items-center mb-[30px]">
        <div className="w-[180px] ">
          <img
            className="w-full aspect-square object-cover"
            src={image}
            alt={title}
          />
        </div>

        <div className="flex-1">
          <div className="text-[#00ADEF] font-[700] text-[35px]">{title}</div>
          <div className="text-[#EFEEE0] font-[400] text-[14px]">
            {singerName != "" ? (
              <>{singerName.join(", ")}</>
            ) : (
              <>{description}</>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

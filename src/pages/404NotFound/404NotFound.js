import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="text-center my-[60px]">
        <h2 className="text-[40px] font-[700] text-white">404 Not Found</h2>
        <p className="mt-[10px] mb-[30px] text-white">
          Could not find requested resource
        </p>
        <Link
          to="/"
          className="inline-flex bg-[#00ADEF] text-white py-[15px] px-[40px] rounded-[5px]"
        >
          Return Home
        </Link>
      </div>
    </>
  );
};

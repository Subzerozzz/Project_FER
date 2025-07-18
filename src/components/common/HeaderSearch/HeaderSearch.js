import axios from "axios";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";

export const HeaderSearch = () => {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const keywordDefault =
    searchParam.get("keyword") == null ? "" : searchParam.get("keyword");

  useEffect(() => {
    axios.get("http://localhost:9999/songs").then(({ data }) => {
      setSongs(data);
    });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const keywordString = event.target.keyword.value;
    navigate(`/search?keyword=${keywordString}`);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="sticky bg-[#212121] mb-[30px] rounded-[50px] px-[30px] py-[15px] top-[20px] z-[999] flex items-center gap-[20px]"
      >
        <input
          type="text"
          name="keyword"
          placeholder="Tìm kiếm..."
          defaultValue={keywordDefault}
          className="order-2 bg-transparent outline-none text-white flex-1 text-[16px]"
        />
        <button type="submit" className="order-1 text-[#FFFFFF] text-[22px]">
          <FaMagnifyingGlass />
        </button>
      </form>
    </>
  );
};

import { FaMagnifyingGlass } from "react-icons/fa6"

export const HeaderSearch = () => {
  return(
    <>
      <form className="sticky bg-[#212121] mb-[30px] rounded-[50px] px-[30px] py-[15px] top-[20px] z-[999] flex items-center gap-[20px]">
        <input type="text" name="keyword" placeholder="Tìm kiếm..." 
        className="order-2 bg-transparent outline-none text-white flex-1 text-[16px]"/>
        <button type="submit" className="order-1 text-[#FFFFFF] text-[22px]">
          <FaMagnifyingGlass />
        </button>
      </form>
      
    </>
  )
}
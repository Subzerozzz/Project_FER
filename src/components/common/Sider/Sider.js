import { Link } from "react-router-dom"
import { SiderMenu } from "./SiderMenu"

export const Sider = () => {
  return(
    <>
      <div className="bg-[#212121] h-[100vh] fixed w-[280px]">
        <div className="sider_logo py-[25px] bg-[#1C1C1C] pl-[20px] h-[92px]"> 
          <Link to="/">
            <img
              src="/Logo.svg"
              alt="logo"
              className="" 
            />
          </Link>
        </div>
        <SiderMenu />
      </div>
      
    </>
  )
}
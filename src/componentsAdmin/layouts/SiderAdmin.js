import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import {
  FaHouse,
} from "react-icons/fa6";
export const SiderAdmin = () => {
  return(
    <>
      <div className="bg-[#212121] h-[100vh] fixed w-[280px]">
        <div className="sider_logo py-[25px] bg-[#1C1C1C] pl-[20px] h-[92px]"> 
          <Link to="/dashboard">
            <img
              src="/Logo.svg"
              alt="logo"
              className="" 
            />
          </Link>
        </div>
        <nav className="sider_navbar py-[30px] px-[20px]">
        <ul className="">
          <li className="mb-[30px]" >
              <NavLink
                to="/dashboard"
                className="text-[white] font-[700] text-[16px] flex gap-[20px] hover:text-[#00ADEF] capitalize"
              >
                <span>{FaHouse}</span>
                DashBoard
              </NavLink>
            </li>
         
        </ul>
      </nav>
      </div>
      
    </>
  )
}
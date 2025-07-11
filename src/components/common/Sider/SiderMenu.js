import {
  FaHeart,
  FaHouse,
  FaMusic,
  FaPodcast,
  FaRightFromBracket,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const SiderMenu = () => {
  const menu = [
    {
      icon: <FaHouse className="w-[24px] h-[22px]" />,
      title: "Trang Chủ",
      link: "/",
    },
    {
      icon: <FaMusic className="w-[24px] h-[22px]" />,
      title: "Danh mục bài hát",
      link: "categories",
    },
    {
      icon: <FaPodcast className="w-[24px] h-[22px]" />,
      title: "Ca sĩ",
      link: "singers",
    },
    {
      icon: <FaHeart className="w-[24px] h-[22px]" />,
      title: "Bài hát yêu thích",
      link: "wishlist",
    },
    {
      icon: <FaRightFromBracket className="w-[24px] h-[22px]" />,
      title: "Đăng xuất",
      link: "logout",
    },
    {
      icon: <FaUser className="w-[24px] h-[22px]" />,
      title: "Đăng nhập",
      link: "login",
    },
    {
      icon: <FaUserPlus className="w-[24px] h-[22px]" />,
      title: "Đăng ký",
      link: "register",
    },
  ];

  return (
    <>
      <nav className="sider_navbar py-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <li className="mb-[30px]" key={index}>
              <NavLink
                to={item.link}
                className="text-[white] font-[700] text-[16px] flex gap-[20px] hover:text-[#00ADEF] capitalize"
              >
                <span>{item.icon}</span>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
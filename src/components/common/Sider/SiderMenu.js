import { useEffect, useState } from "react";
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
  const [isLogin, setIsLogin] = useState(false);

  const updateStatusAccount = () => {
    const checkExistAccount = sessionStorage.getItem("account");
    if (checkExistAccount) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    updateStatusAccount();

    window.addEventListener("accountChange", updateStatusAccount);
  }, []);

  const menu = [
    {
      icon: <FaHouse className="w-[24px] h-[22px]" />,
      title: "Trang Chủ",
      link: "/",
      isLogin: "",
    },
    {
      icon: <FaMusic className="w-[24px] h-[22px]" />,
      title: "Danh mục bài hát",
      link: "categories",
      isLogin: "",
    },
    {
      icon: <FaPodcast className="w-[24px] h-[22px]" />,
      title: "Ca sĩ",
      link: "singers",
      isLogin: "",
    },
    {
      icon: <FaHeart className="w-[24px] h-[22px]" />,
      title: "Bài hát yêu thích",
      link: "wishlist",
      isLogin: true,
    },
    {
      icon: <FaRightFromBracket className="w-[24px] h-[22px]" />,
      title: "Đăng xuất",
      link: "logout",
      isLogin: true,
    },
    {
      icon: <FaUser className="w-[24px] h-[22px]" />,
      title: "Đăng nhập",
      link: "login",
      isLogin: false,
    },
    {
      icon: <FaUserPlus className="w-[24px] h-[22px]" />,
      title: "Đăng ký",
      link: "register",
      isLogin: false,
    },
  ];

  return (
    <>
      <nav className="sider_navbar py-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <div key={index}>
              {(item.isLogin === isLogin || item.isLogin === "") && (
                <li className="mb-[30px]">
                  <NavLink
                    to={item.link}
                    className="text-[white] font-[700] text-[16px] flex gap-[20px] hover:text-[#00ADEF] capitalize"
                  >
                    <span>{item.icon}</span>
                    {item.title}
                  </NavLink>
                </li>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/common/Title/Title";

export const LoginPage = () => {
  const [accountArray, setAccountArray] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/accounts").then(({ data }) => setAccountArray(data));
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    //Kiem tra xem tk ton tai trong he thong khong
    const existAccount = accountArray.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password.toLowerCase() === password.toLowerCase()
    );

    if (existAccount === undefined) {
      alert("Email hoặc mật khẩu chưa chính xác !");
    } else {
      sessionStorage.setItem("account", existAccount.id);
      window.dispatchEvent(new Event("accountChange"));
      navigate("/");
    }
  };

  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <div className="mb-[20px] text-center">
          <Title text="Đăng Nhập Tài Khoản" />
        </div>

        <form onSubmit={handleLogin}>
          {/* Email  */}
          <div className="mb-[15px]">
            <label
              className="block mg-[5px] font-[600] text-[14px]"
              htmlFor="email"
            >
              <span className="text-white">Email</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="text"
              placeholder="levana@gmail.com"
              id="email"
              name="email"
              className="h-[50px] w-full  bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
            />
          </div>
          {/* Password  */}
          <div className="mb-[15px]">
            <label
              className="block mg-[5px] font-[600] text-[14px]"
              htmlFor="password"
            >
              <span className="text-white">Mật Khẩu</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="h-[50px] w-full  bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
            />
          </div>
          {/* Đăng nhập  */}
          <button
            type="submit"
            className="h-[50px] w-full  bg-[#00ADEF] rounded-[6px] px-[16px] font-[700] text-[16px] outline-none text-[#FFFFFF]"
          >
            Đăng Nhập
          </button>
        </form>
      </div>
    </>
  );
};

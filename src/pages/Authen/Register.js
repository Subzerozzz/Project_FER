import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/common/Title/Title";

export const RegisterPage = () => {
  const [accountArray, setAccountArray] = useState([]);
  const [errorEmail, setErrorEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:9999/accounts")
      .then(({ data }) => setAccountArray(data));
  }, []);

  const generateRandomID = (length) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const role = "customer";
    const createdAt = new Date();
    const signUp = new Date();
    const id = generateRandomID(6);

    // Validate data email
    const existEmail = accountArray.find((item) => item.email == email);
    let newEmailError = "";
    if (existEmail) {
      newEmailError = "Email đã tồn tại trong hệ thống!";
      setErrorEmail(newEmailError);
      return;
    } else {
      newEmailError = "";
      setErrorEmail(newEmailError);
    }

    //Tao 1 doi tuong moi

    const newAccount = {
      id: id,
      fullName: name,
      email: email,
      password: password,
      role: role,
      username: username,
      createdAt: createdAt,
      signUpAt: signUp,
    };

    axios
      .post("http://localhost:9999/accounts", newAccount)
      .then(({ item }) => {
        sessionStorage.setItem("account", newAccount.id);
        window.dispatchEvent(new Event("accountChange"));
        alert("Đăng ký tài khoản thành công !");
        navigate("/");
      });
  };

  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <div className="mb-[20px] text-center">
          <Title text="Đăng Ký Tài Khoản" />
        </div>

        <form onSubmit={handleRegister}>
          {/* Họ Và Tên  */}
          <div className="mb-[15px]">
            <label
              className="block mg-[5px] font-[600] text-[14px]"
              htmlFor="name"
            >
              <span className="text-white">Họ Tên</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="text"
              placeholder="Le Van A"
              id="name"
              name="name"
              className="h-[50px] w-full  bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
            />
          </div>
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
            {errorEmail != "" ? (
              <div style={{ color: "red", fontSize: "0.875rem" }}>
                {errorEmail}
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* User name  */}
          <div className="mb-[15px]">
            <label
              className="block mg-[5px] font-[600] text-[14px]"
              htmlFor="username"
            >
              <span className="text-white">Username</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="text"
              placeholder="levana@gmail.com"
              id="username"
              name="username"
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
          {/* Đăng ký  */}
          <button
            type="submit"
            className="h-[50px] w-full  bg-[#00ADEF] rounded-[6px] px-[16px] font-[700] text-[16px] outline-none text-[#FFFFFF]"
          >
            Đăng Ký
          </button>
        </form>
      </div>
    </>
  );
};

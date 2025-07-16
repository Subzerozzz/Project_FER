import { useState } from "react";
import { Title } from "../../components/common/Title/Title";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(
      `http://localhost:9999/users?email=${email}&password=${password}`
    );

    const users = await res.json();

    if (users.length > 0) {
      alert("Đăng nhập thành công!");
      console.log("User:", users[0]);
       navigate("/");
      // Ví dụ: localStorage.setItem("user", JSON.stringify(users[0]));
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    alert("Có lỗi xảy ra, vui lòng thử lại.");
  }
};

  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <div className="mb-[20px] text-center">
          <Title text="Đăng Nhập Tài Khoản" />
        </div>

        <form onSubmit={handleLogin} className="space-y-5 w-[500px] m-auto">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ví dụ: levana@gmail.com"
              className="w-full px-4 py-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mật Khẩu <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full px-4 py-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00AEEF] hover:bg-[#0095d6] text-white py-2 rounded"
          >
            Đăng Nhập
          </button>
        </form>
      </div>
    </>
  );
};

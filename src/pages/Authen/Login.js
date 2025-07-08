import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Đăng nhập thành công!");
        // ví dụ: lưu token hoặc chuyển trang
      } else {
        alert("Đăng nhập thất bại: " + (data.message || "Sai thông tin đăng nhập"));
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <>
      <div className="w-[980px] h-[283px] rounded-lg text-white mx-auto mt-[50px] mb-[342px]">
        <h2 className="text-xl font-semibold text-center mb-6">Đăng Nhập Tài Khoản</h2>

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
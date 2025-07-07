export const LoginPage = () => {
  return(
    <>
    
      
      <div className="bg-[#212121] p-10 rounded-lg w-[980px] h-[375px] justify-center items-center px-4 min-h-screen text-white">
        <h2 className="text-xl font-semibold mb-6 text-center">Đăng Ký Tài Khoản</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Họ Tên <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ví dụ: Le Van A"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Ví dụ: levana@gmail.com"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Mật Khẩu <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Đăng Ký
          </button>
        </form>
      </div>
    
    </>
  )
}
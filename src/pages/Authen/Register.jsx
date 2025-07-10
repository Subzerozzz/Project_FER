import { useState } from "react";

export const RegisterPage = () => {
  // state to store data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const RANGE_PASSWORD = {
    min: 6,
    max: 20,
  }

  const LENGTH_OF_USERNAME = {
    min: 3,
    max: 30,
  }

  /**
   * call api
   */
  const register = async () => {
    //xy ly call data o day
  }
  
  /**
   * Update form data state
   * @param {React.ChangeEvent} e - The change event
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  /**
   * Handle form submission
   * @param {React.FormEvent} e - The form event
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
    if (!validateForm()) return;
    
    alert("Đăng ký thành công!");
    console.log("Form submitted:", formData);
    
    // Reset form data
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  /**
   * Validate form data
   * @returns {boolean} - Returns true if the form data is valid, otherwise false
   */

  const validateForm = () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return false;
    }

    if (!REGEX_EMAIL.test(email)) {
      alert("Email không hợp lệ!");
      return false;
    }

    if (name.length < LENGTH_OF_USERNAME.min || name.length > LENGTH_OF_USERNAME.max) {
      alert(`Họ tên phải có độ dài từ ${LENGTH_OF_USERNAME.min} đến ${LENGTH_OF_USERNAME.max} ký tự!`);
      return false;
    }

    if (password.length < RANGE_PASSWORD.min || password.length > RANGE_PASSWORD.max) {
      alert(`Mật khẩu phải có độ dài từ ${RANGE_PASSWORD.min} đến ${RANGE_PASSWORD.max} ký tự!`);
      return false;
    }
    return true;
  }

  return (
    <div className="flex items-center justify-center w-full min-h-[400px]">
      <div className="min-w-[500px] max-h-full rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-center capitalize text-slate-200">
          Đăng ký tài khoản
        </h3>

        <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 text-slate-200">
            <label htmlFor="name" className="text-sm cursor-pointer">
              Họ Tên <span className="text-red-500">*</span>
            </label>
            <input
              className="p-4 w-full rounded-md outline-none text-slate-500"
              placeholder="Ví dụ: Lê Văn A"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-2 text-slate-200">
            <label htmlFor="email" className="text-sm cursor-pointer">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="p-4 w-full rounded-md outline-none text-slate-500"
              placeholder="Ví dụ: levana@gmail.com"
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 text-slate-200">
            <label htmlFor="password" className="text-sm cursor-pointer">
              Mật Khẩu <span className="text-red-500">*</span>
            </label>
            <input
              className="p-4 w-full rounded-md outline-none text-slate-500"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="duration-150 w-full p-4 font-bold bg-[#00ADEF] hover:bg-[#008BB2] active:bg-[#006B8C] rounded-md text-slate-50">
            Đăng Ký
          </button>
        </form>
      </div>
    </div>
  );
};

import { useState } from "react";
import { HeaderSearch } from "../../components/common/HeaderSearch/HeaderSearch";

export const SingersPage = () => {
  const [keyword, setKeyword] = useState("");

  const singers = [
    { id: 1, name: "Sơn Tùng MTP", title: "Ca sĩ, nhạc sĩ, rapper", image: "/demo/singer/son_tung.jpg" },
    { id: 2, name: "Nal", title: "Ca sĩ, nhạc sĩ", image: "/demo/singer/nal.jpg" },
    { id: 3, name: "Tuấn Hưng", title: "Ca sĩ", image: "/demo/singer/tuan_hung.jpg" },
    { id: 4, name: "Jimmii Nguyễn", title: "Ca sĩ, nhạc sĩ", image: "/demo/singer/jimmii-nguyen.jpg" },
    { id: 5, name: "Big Daddy", title: "Rapper, ca sĩ", image: "/demo/singer/big_daddy.jpg" },
    { id: 6, name: "Soobin Hoàng Sơn", title: "Ca sĩ, rapper, nhạc sĩ", image: "/demo/singer/soobin.jpg" },
    { id: 7, name: "Mỹ Tâm", title: "Ca sĩ, nhạc sĩ", image: "/demo/singer/my_tam.jpg" },
    { id: 8, name: "Đen Vâu", title: "Rapper, nhạc sĩ", image: "/demo/singer/den_vau.jpg" },
    { id: 9, name: "Hòa Minzy", title: "Ca sĩ", image: "/demo/singer/hoa_minzy.jpg" },
    { id: 10, name: "Min", title: "Ca sĩ, vũ công", image: "/demo/singer/min.jpg" },
    { id: 11, name: "Du Thiên", title: "Ca sĩ", image: "/demo/singer/du_thien.jpg" },
    { id: 12, name: "Tùng Dương", title: "Ca sĩ", image: "/demo/singer/tung_duong.jpg" },
    { id: 13, name: "Anh Tú", title: "Ca sĩ", image: "/demo/singer/anh_tu.jpg" },
    { id: 14, name: "Phan Mạnh Quỳnh", title: "Ca sĩ, nhạc sĩ", image: "/demo/singer/phan_manh_quynh.jpg" },
    { id: 15, name: "Quang Hùng", title: "Ca sĩ ", image: "/demo/singer/quang_hung.jpg" }
  ];

  // Lọc danh sách dựa trên keyword
  const filteredSingers = singers.filter(s =>
    s.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <HeaderSearch onSearch={(kw) => setKeyword(kw)} />
      
      <div className="text-white ml-5 text-3xl font-medium">List Singers</div>

      <div className="grid grid-cols-5 p-5">
        {filteredSingers.map(s => (
          <div key={s.id} className="flex flex-col">
            <img
              src={s.image}
              alt={s.name}
              style={{ height: '150px', width: '150px', borderRadius: '10px' }}
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: '15px' }}>
              <h3 className="mt-2 font-semibold text-lg text-white">{s.name}</h3>
              <p className="text-gray-500 text-[12px] truncate w-[150px]">{s.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
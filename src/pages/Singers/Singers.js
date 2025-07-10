// import { useState } from "react";
// import { HeaderSearch } from "../../components/common/HeaderSearch/HeaderSearch";
// import musicData from '../../data/music_data.json'
// export const SingersPage = () => {
//   const [keyword, setKeyword] = useState("");
//  const singers = musicData.singers
  
//   // Lọc danh sách dựa trên keyword
//   const filteredSingers = singers.filter(s =>
//     s.name.toLowerCase().includes(keyword.toLowerCase())
//   );

//   return (
//     <>
//       <HeaderSearch onSearch={(kw) => setKeyword(kw)} />
      
//       <div className="text-white ml-5 text-3xl font-medium">List Singers</div>

//       <div className="grid grid-cols-5 p-5">
//         {filteredSingers.map(s => (
//           <div key={s.id} className="flex flex-col">
//             <img
//               src={s.image}
//               alt={s.name}
//               style={{ height: '150px', width: '150px', borderRadius: '10px' }}
//             />
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: '15px' }}>
//               <h3 className="mt-2 font-semibold text-lg text-white">{s.name}</h3>
//               <p className="text-gray-500 text-[12px] truncate w-[150px]">{s.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
import { useOutletContext } from "react-router-dom";
import musicData from '../../data/music_data.json'

export const SingersPage = () => {
  const { keyword } = useOutletContext(); // lấy keyword từ LayoutDefault
  const singers = musicData.singers;

  const filteredSingers = singers.filter(s =>
    s.name.toLowerCase().includes(keyword.toLowerCase())
  );
  

  return (
    <>
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
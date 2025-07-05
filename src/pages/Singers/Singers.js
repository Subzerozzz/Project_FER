export const SingersPage = () => {
  const singers = [
  { id: 1, name: "Sơn Tùng MTP",title: "ABC", image: "/demo/singer/son_tung.jpg" },
  { id: 2, name: "Nal",title: "ABC", image: "/demo/singer/nal.jpg" },
  { id: 3, name: "Tuấn Hưng",title: "ABC", image: "/demo/singer/tuan_hung.jpg" },
  { id: 4, name: "Jimmii Nguyễn",title: "ABC", image: "/demo/singer/jimmii-nguyen.jpg" },
  { id: 5, name: "Big Daddy",title: "ABC", image: "/demo/singer/big_daddy.jpg" },
  { id: 6, name: "Soobin Hoàng Sơn",title: "ABC", image: "/demo/singer/soobin.jpg" },
  { id: 7, name: "Mỹ Tâm",title: "ABC", image: "/demo/singer/my_tam.jpg" },
  { id: 8, name: "Đen Vâu",title: "ABC", image: "/demo/singer/den_vau.jpg" },
  { id: 9, name: "Hòa Minzy", title: "ABC",image: "/demo/singer/hoa_minzy.jpg" },
  { id: 10, name: "Min", title: "ABC",image: "/demo/singer/min.jpg" },
  { id: 11, name: "Du Thiên",title: "ABC", image: "/demo/singer/du_thien.jpg" },
  { id: 12, name: "Tùng Dương",title: "ABC", image: "/demo/singer/tung_duong.jpg" },
  { id: 13, name: "Anh Tú",title: "ABC", image: "/demo/singer/anh_tu.jpg" },
  { id: 14, name: "Phan Mạnh Quỳnh",title: "ABC", image: "/demo/singer/phan_manh_quynh.jpg" },
  { id: 15, name: "Quang Hung", title: "ABC",image: "/demo/singer/quang_hung.jpg" },
  


];
  return(
    // <>
    //   <h1 className="text-[32px] text-[dark] font-[700] h-[3000px] bg-white">Singers Page</h1>
    // </>
    <>
    <div className="text-white ml-5 text-3xl font-medium">List Singers</div>
     <div className="grid grid-cols-5 gap-1d p-4 ">
        {singers.map(s => (
        <div key={s.id} className="flex flex-col ">
          <img 
            src={s.image} 
            alt={s.name} 
            // className=" rounded-10 object-cover border-1 border-gray-3"
            style={{height:'150px',width:'150px',borderRadius:'10px'}}
          />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",marginBottom:'15px' }}>
           <h3 className="mt-2 font-semibold text-lg text-white">{s.name}</h3>
           <p className="text-gray-500 text-[12px]">{s.title}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
export const SingersPage = () => {
  const singers = [
  { id: 1, name: "Sơn Tùng MTP",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 2, name: "Mỹ Tâm",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 3, name: "Đen Vâu",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 4, name: "Hòa Minzy",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 5, name: "Jack",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 6, name: "Sơn Tùng MTP",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 7, name: "Mỹ Tâm",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 8, name: "Đen Vâu",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 9, name: "Hòa Minzy", title: "ABC",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 10, name: "Jack", title: "ABC",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 11, name: "Jack",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 12, name: "Sơn Tùng MTP",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 13, name: "Mỹ Tâm",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 14, name: "Đen Vâu",title: "ABC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 15, name: "Hòa Minzy", title: "ABC",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" },
  { id: 16, name: "Jack", title: "ABC",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" }


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
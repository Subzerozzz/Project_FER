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
  { id: 10, name: "Jack", title: "ABC",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18yWzkfTbO6_49aWm3-bvLzzKBaedfug8cw&s" }

];
  return(
    // <>
    //   <h1 className="text-[32px] text-[dark] font-[700] h-[3000px] bg-white">Singers Page</h1>
    // </>
    <div className="grid grid-cols-5 gap-5 p-4">
    {singers.map(s => (
      <div key={s.id} className="bg-white rounded-lg shadow p-4 text-center">
        <img 
          src={s.image} 
          alt={s.name} 
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <h3 className="mt-2 font-semibold text-lg">{s.name}</h3>
        <p>{s.title}</p>
        </div>
      </div>
    ))}
  </div>
  )
}
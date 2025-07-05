export const SingersPage = () => {
  const singers = [
  { id: 1, name: "Sơn Tùng MTP", image: "https://via.placeholder.com/150x150?text=Sơn+Tùng" },
  { id: 2, name: "Mỹ Tâm", image: "https://via.placeholder.com/150x150?text=Mỹ+Tâm" },
  { id: 3, name: "Đen Vâu", image: "https://via.placeholder.com/150x150?text=Đen+Vâu" },
  { id: 4, name: "Hòa Minzy", image: "https://via.placeholder.com/150x150?text=Hòa+Minzy" },
  { id: 5, name: "Jack", image: "https://via.placeholder.com/150x150?text=Jack" }
];
  return(
    // <>
    //   <h1 className="text-[32px] text-[dark] font-[700] h-[3000px] bg-white">Singers Page</h1>
    // </>
    <div className="grid grid-cols-2 gap-4 p-4">
    {singers.map(s => (
      <div key={s.id} className="bg-white rounded-lg shadow p-4 text-center">
        <img 
          src={s.image} 
          alt={s.name} 
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h3 className="mt-2 font-semibold text-lg">{s.name}</h3>
      </div>
    ))}
  </div>
  )
}
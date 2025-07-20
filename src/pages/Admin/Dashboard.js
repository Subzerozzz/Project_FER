
export default function DashBoard(){
    const account = [
        {id:1,name:"manh1",email:'email1@gmail.com',active:1},
        {id:2,name:"manh2",email:'email2@gmail.com',active:0},
        {id:3,name:"manh3",email:'email3@gmail.com',active:1},
        {id:4,name:"manh4",email:'email4@gmail.com',active:1},
    ]
    return(
      <>
      <div>
        <table class="table-auto w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-50">
                    <th class="border border-gray-300 px-4 py-2 text-left">Id</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Name</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Email</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Active</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {
            account?.map((acc) => {
                return(
               <tr key={acc.id} class="bg-gray-50">
                 <td class="border border-gray-300 px-4 py-2">{acc.id}</td>
                 <td class="border border-gray-300 px-4 py-2">{acc.name}</td>
                 <td class="border border-gray-300 px-4 py-2">{acc.email}</td>
                 <td class="border border-gray-300 px-4 py-2">{acc.active}</td>
                 <td class="border border-gray-300  py-2">
                <button class="bg-blue-400 text-white px-4 py-2 m-4 rounded">view</button>
                <button class="bg-orange-400 text-white px-4 py-2 m-4 rounded">view</button>
                <button class="bg-blue-400 text-white px-4 py-2 m-4 rounded">view</button>
                 </td>
               </tr> 
               )
               })
            }
            </tbody>
        </table>
        
      </div>
     </>
    )
}
import { Outlet } from "react-router-dom"
import { HeaderSearch } from "../components/common/HeaderSearch/HeaderSearch"
import { Play } from "../components/common/Play/Play"
import { Sider } from "../components/common/Sider/Sider"

export const LayoutDefault = () => {
  return(
    <>
      <div className=''>
        <div className='container mx-[auto]'>
          <div className="flex gap-[20px]">
            <div className="sidebar w-[280px]">
            <Sider />
            </div>
            <div className="flex-1 mt-[20px]">
              <HeaderSearch/>
              <main className="mb-[100px]">
                <Outlet/>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Play/>
      </div> 
      
    </>
  )
}